'use strict';

let FastBoot = require('fastboot');

module.exports = {
  name: 'ember-cli-fastboot-testing',

  isDevelopingAddon() {
    return true;
  },

  serverMiddleware(options) {
    this._fastbootRenderingMiddleware(options.app);
  },

  testemMiddleware(app) {
    this._fastbootRenderingMiddleware(app);
  },

  _fastbootRenderingMiddleware(app) {
    app.use('/__fastboot-testing', (req, res) => {
      let options = {
        request: {
          headers: {
            host: 'ember-cli-fastboot-testing.localhost'
          }
        },
        response: {}
      };

      this.fastboot
        .visit(req.query.url, options)
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
