'use strict';

let FastBoot = require('fastboot');
let url = require('url');
let resolve = require('resolve');
let nock = require('nock');
let bodyParser = require('body-parser');
let Comlink = require('comlink');

let nockInterface = {
  listeners: [],
  lastMessage: null,

  dispatchEvent(message) {
    let listener = this.listeners[0];
    return listener({ data: message });
  },

  postMessage(message) {
    this.lastMessage = message;
  },

  addEventListener(type, listener) {
    this.listeners.push(listener);
  },

  removeEventListener(type, listener) {
    let index = this.listeners.indexOf(listener);
    this.listeners.splice(index, 1);
  },
}

Comlink.expose(nock, nockInterface);

let getCircularReplacer = () => {
  let seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
}

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
    app.post('/__nock-proxy', bodyParser.json({ limit: '50mb' }), (req, res) => {
      nockInterface.dispatchEvent(req.body).then(() => {
        let body = JSON.stringify(
          nockInterface.lastMessage,
          getCircularReplacer()
        );

        res.send(body);
      });
    });

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

      res.set('x-fastboot-testing', true);

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
      this.fastboot = new FastBoot({
        distPath
      });
    }

    return result;
  },

};
