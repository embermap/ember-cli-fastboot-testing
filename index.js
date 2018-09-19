'use strict';

let FastBoot = require('fastboot');
let url = require('url');

module.exports = {
  name: 'ember-cli-fastboot-testing',

  isDevelopingAddon() {
    return false;
  },

  serverMiddleware(options) {
    this._fastbootRenderingMiddleware(options.app);
  },

  testemMiddleware(app) {
    this._fastbootRenderingMiddleware(app);
  },

  _fastbootRenderingMiddleware(app) {
    app.use('/__fastboot-testing', (req, res) => {
      let urlToVisit = decodeURIComponent(req.query.url);
      let parsed = url.parse(urlToVisit, true);

      let options = {
        request: {
          method: 'GET',
          protocol: 'http',
          url: parsed.path,
          query: parsed.query,
          headers: {
            host: 'ember-cli-fastboot-testing.localhost'
          }
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

    if (this.fastboot) {
      this.fastboot.reload({
        distPath
      });
    } else {
      this.fastboot = new FastBoot({
        distPath
      });
    }

    return result;
  },

};
