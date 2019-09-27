'use strict';

let FastBoot = require('fastboot');
let url = require('url');
let resolve = require('resolve');
let nock = require('nock');
let bodyParser = require('body-parser');
let path = require('path');
let fs = require('fs');
let minimist = require('minimist');
let JSONfn = require('json-fn');

module.exports = {
  name: 'ember-cli-fastboot-testing',

  isDevelopingAddon() {
    return false;
  },

  isEnabled() {
    // enable this addon if were building for the dummy
    // app. that's because this is most likely an addon docs
    // build and we need this addon enabled for our docs
    // to deploy correctly.
    return this.app.name === "dummy" ||
      this.app.env !== "production";
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

    app.post('/__mock-request', bodyParser.json({ limit: '50mb' }), (req, res) => {
      let mock = nock(req.headers.origin)
        .persist()
        .intercept(req.body.path, req.body.method)
        .reply(req.body.statusCode, req.body.response);

      res.json({ mocks: mock.pendingMocks() });
    });

    app.use('/__cleanup-mocks', (req, res) => {
      nock.cleanAll()

      res.json({ ok: true });
    });

    app.post('/__fastboot-testing', bodyParser.json(), (req, res) => {
      let urlToVisit = decodeURIComponent(req.body.url);
      let parsed = url.parse(urlToVisit, true);

      let headers = Object.assign(
        {},
        req.headers,
        JSONfn.parse(req.body.options).headers || {}
      );

      let defaultOptions = {
        request: {
          method: 'GET',
          protocol: 'http',
          url: parsed.path,
          query: parsed.query,
          headers,
        },
        response: {},
      };

      let options = Object.assign(defaultOptions, JSONfn.parse(req.body.options));

      res.set('x-fastboot-testing', true);

      if (!this.fastboot) {
        const path = minimist(process.argv.slice(2)).path;
        if (path) {
          this._createServer(path);
        } else {
          return res.json({ err: 'no path found' });
        }
      }

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
        })
        .catch(err => {
          let errorObject;
          let jsonError = {};

          errorObject = (typeof err === 'string') ?
            new Error(err) :
            err;

          // we need to copy these properties off the error
          // object into a pojo that can be serialized and
          // sent over the wire to the test runner.
          let errorProps = [
            'description',
            'fileName',
            'lineNumber',
            'message',
            'name',
            'number',
            'stack'
          ];

          errorProps.forEach(key => jsonError[key] = errorObject[key]);

          res.json({ err: jsonError });
        });
    });

    if (this.app && this.app.name === "dummy") {
      // our dummy app has an echo endpoint!
      app.post('/fastboot-testing/echo', bodyParser.text(), (req, res) => {
        res.send(req.body);
      });
    }
  },

  postBuild(result) {
    let distPath = result.directory;

    if (this.fastboot) {
      this.fastboot.reload({
        distPath
      });
    } else {
      this._createServer(distPath)
    }

    return result;
  },

  _createServer(distPath) {
    let configPath = 'config';
    let pkg = this.project.pkg;
    if (pkg['ember-addon'] && pkg['ember-addon']['configPath']) {
      configPath = pkg['ember-addon']['configPath'];
    }

    let fastbootTestConfigPath = path.resolve(configPath, 'fastboot-testing.js');

    let options = {};
    if (fs.existsSync(fastbootTestConfigPath)) {
      options = require(fastbootTestConfigPath);
    }

    let fastbootOptions = Object.assign({
      distPath
    }, options);

    this.fastboot = new FastBoot(fastbootOptions);
    // In test config, you can define a function `setupFastboot` 
    // to access the fastboot instance here
    if (options.setupFastboot && typeof options.setupFastboot === 'function') {
      options.setupFastboot(this.fastboot);
    }
  }
};
