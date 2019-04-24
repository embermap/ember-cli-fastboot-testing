'use strict';

let FastBoot = require('fastboot');
let url = require('url');
let resolve = require('resolve');

module.exports = {
  name: 'ember-cli-fastboot-testing',

  isDevelopingAddon() {
    return false;
  },

  included() {
    this._super.included.apply(this, arguments);

    try {
      resolve.sync('ember-cli-fastboot/package.json', { basedir: this.project.root });
    } catch(err) {
      throw new Error(`Unable to find FastBoot. Did you forget to add ember-cli-fastboot to your app? ${err}`);
    }
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

      let defaults = {};

      let headers = Object.assign(req.headers, defaults, req.query.headers);

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
