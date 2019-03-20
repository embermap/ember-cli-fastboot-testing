import { fetch } from 'whatwg-fetch';
import { setupContext, teardownContext } from '@ember/test-helpers';
import param from 'jquery-param';

let cleanupMocks = function() {
  return fetch('/__cleanup-mocks');
};

let createMock = async function(path, method, statusCode, response) {
  return await fetch('/__mock-request', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path,
      method,
      statusCode,
      response
    }),
  });
}

export let mockServer = {
  async get(path, response, status = 200) {
    return createMock(path, "GET", status, response);
  },

  async post(path, response, status = 200) {
    return createMock(path, "POST", status, response);
  },

  async patch(path, response, status = 200) {
    return createMock(path, "PATCH", status, response);
  },

  async put(path, response, status = 200) {
    return createMock(path, "PUT", status, response);
  },

  async delete(path, response, status = 200) {
    return createMock(path, "DELETE", status, response);
  }
};

export function setup(hooks) {
  hooks.beforeEach(function() {
    return setupContext(this);
  });

  hooks.afterEach(async function() {
    await cleanupMocks();
    return teardownContext(this);
  });
}

export async function fastboot(url, { headers = {} }) {
  let response = await fetchFromEmberCli(url, headers);
  let result = await response.json();

  let body = result.err ?
    formatError(result.err) :
    extractBody(result.html);

  result.htmlDocument = parseHtml(result.html)
  result.body = body;

  return result;
}

export async function visit(url, options = {}) {
  let result = await fastboot(url, { headers: options.headers || {} });

  document.querySelector('#ember-testing').innerHTML = result.body;

  return result;
}

// private

let fetchFromEmberCli = async function(url, headers) {
  let endpoint = `/__fastboot-testing?${param({url, headers})}`;
  let response;
  let error;

  try {
    response = await fetch(endpoint);
  } catch (e) {
    if (e.message && e.message.match(/^Mirage:/)) {
      error = `Ember CLI FastBoot Testing: It looks like Mirage is intercepting ember-cli-fastboot-testing's attempt to render ${url}. Please disable Mirage when running FastBoot tests.`;
    } else {
      error = `Ember CLI FastBoot Testing: We were unable to render ${url}. Is your test suite blocking or intercepting HTTP requests? Error: ${e.message ? e.message : e}.`
    }
  }

  if (response && response.headers && response.headers.get && response.headers.get('x-fastboot-testing') !== 'true') {
    error = `Ember CLI FastBoot Testing: We were unable to render ${url}. Is your test suite blocking or intercepting HTTP requests?`;
  }

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw new Error(error);
  }

  return response;
};

let parseHtml = function(str) {
  let parser = new DOMParser();
  return parser.parseFromString(str, "text/html");
}

let extractBody = function(html) {
  let start = '<script type="x/boundary" id="fastboot-body-start"></script>';
  let end = '<script type="x/boundary" id="fastboot-body-end"></script>';

  let startPosition = html.indexOf(start);
  let endPosition = html.indexOf(end);

  if (!startPosition || !endPosition) {
    throw "Could not find fastboot boundary";
  }

  let startAt = startPosition + start.length;
  let endAt = endPosition - startAt;

  return html.substr(startAt, endAt);
}

let formatError = function(err) {
  return `<pre>${err.stack}</pre>`;
};
