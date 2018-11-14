'use strict';

let FastBoot = require('fastboot');
let url = require('url');
let RequestProxy = require('./lib/request-proxy');
let RequestProxyServer = require('./lib/request-proxy-server');

module.exports = {
  name: 'ember-cli-fastboot-testing',

  isDevelopingAddon() {
    return true;
  },

  serverMiddleware(options) {
    this._fastbootRenderingMiddleware(options.app);
  },

  testemMiddleware(app) {
    this._websocketsMiddleware(app);
    this._fastbootRenderingMiddleware(app);
  },

  _websocketsMiddleware() {
    this.wss = new RequestProxyServer();
    this.wss.listen();
  },

  _fastbootRenderingMiddleware(app) {
    app.use('/__fastboot-testing', (req, res) => {
      let urlToVisit = decodeURIComponent(req.query.url);
      let parsed = url.parse(urlToVisit, true);

      let headers = Object.assign(req.headers, {
        host: 'ember-cli-fastboot-testing.localhost'
      });

      let options = {
        request: {
          method: 'GET',
          protocol: 'http',
          url: parsed.path,
          query: parsed.query,
          headers: headers
        },
        response: {}
      };

      this.fastboot
        .visit(urlToVisit, options)
        .then(page => {
          page.html().then(html => {
            res.json({
              finalized: page.finalized,
              url: page.url,
              statusCode: page.statusCode,
              headers: page.headers.headers,
              html: html
            });
          });
        });
    });
  },

  postBuild(result) {
    let distPath = result.directory;
    let client = new RequestProxy('ws://127.0.0.1:7001');

    let sandboxGlobals = {
      fetch: function(url, options) {
        return client.request(url, options).then(response => {
          return response;
        }).catch(e => {
          // eslint-disable-next-line no-console
          console.error(e);
        });
      }
      // },
      // najax: function(url, options) {
      //   return client.request(url, options).then(response => {
      //     return response;
      //   }).catch(e => {
      //     // eslint-disable-next-line no-console
      //     console.error(e);
      //   });
      // }
    };
    if (this.fastboot) {
      this.fastboot.reload({
        distPath,
        sandboxGlobals
      });
    } else {
      this.fastboot = new FastBoot({
        distPath,
        sandboxGlobals
      });
    }

    return result;
  },

};
