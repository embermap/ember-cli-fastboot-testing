'use strict';

const fs = require('fs');
const path = require('path');
const nock = require('nock');
const { URL } = require('url');
const JSONfn = require('json-fn');
const FastBoot = require('fastboot');
const bodyParser = require('body-parser');

function createMockRequest(app) {
  app.post(
    '/__mock-request',
    bodyParser.json({ limit: '50mb' }),
    (req, res) => {
      const requestOrigin = req.body.origin || req.headers.origin;
      let mock = nock(requestOrigin)
        .persist()
        .intercept(req.body.path, req.body.method)
        .reply(
          req.body.statusCode,
          req.body.response,
          req.body.responseHeaders
        );

      res.json({ mocks: mock.pendingMocks() });
    }
  );
}

function createCleanUpMocks(app) {
  app.use('/__cleanup-mocks', (req, res) => {
    nock.cleanAll();

    res.json({ ok: true });
  });
}

function createFastbootTest(app, callback) {
  app.post('/__fastboot-testing', bodyParser.json(), (req, res) => {
    const urlToVisit = decodeURIComponent(req.body.url);
    const parsed = new URL(urlToVisit, req.headers.origin);

    const headers = Object.assign(
      {},
      req.headers,
      JSONfn.parse(req.body.options).headers || {}
    );

    const defaultOptions = {
      request: {
        method: 'GET',
        protocol: 'http',
        url: parsed.pathname,
        query: Object.fromEntries(parsed.searchParams),
        headers,
      },
      response: {},
    };

    const options = Object.assign(
      defaultOptions,
      JSONfn.parse(req.body.options)
    );

    res.set('x-fastboot-testing', true);

    callback({ req, res, options, urlToVisit });
  });
}

function createFastbootEcho(app) {
  app.post('/fastboot-testing/echo', bodyParser.text(), (req, res) => {
    res.send(req.body);
  });
}

function reloadServer(fastboot, distPath) {
  fastboot.reload({ distPath });
}

function createServer(distPath, pkg) {
  const options = makeFastbootTestingConfig({ distPath }, pkg);
  return new FastBoot(options);
}

function makeFastbootTestingConfig(config, pkg) {
  const defaults = {
    setupFastboot() {},
  };

  let configPath = 'config';

  if (pkg['ember-addon'] && pkg['ember-addon']['configPath']) {
    configPath = pkg['ember-addon']['configPath'];
  }

  const fastbootTestConfigPath = path.resolve(
    configPath,
    'fastboot-testing.js'
  );

  const customized = fs.existsSync(fastbootTestConfigPath)
    ? require(fastbootTestConfigPath)
    : {};

  return Object.assign({}, config, defaults, customized);
}

module.exports = {
  createMockRequest,
  createCleanUpMocks,
  createFastbootTest,
  createFastbootEcho,
  reloadServer,
  createServer,
  makeFastbootTestingConfig,
};
