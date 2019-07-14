import { fetch } from 'whatwg-fetch';
import { setupContext, teardownContext } from '@ember/test-helpers';
import { mockServer } from './-private/mock-server';
import param from 'jquery-param';
import * as Comlink from 'comlink';

export function setup(hooks) {
  hooks.beforeEach(async function() {
    await mockServer.cleanUp();
    return setupContext(this);
  });

  hooks.afterEach(async function() {
    await mockServer.cleanUp();
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

export { mockServer };

export const nock = Comlink.wrapChain({
  listeners: [],

  async postMessage(message) {
    let response = await fetch('/__nock-proxy', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    let result = await response.json();

    for (let listener of this.listeners) {
      listener({ data: result });
    }
  },

  addEventListener(type, listener) {
    this.listeners.push(listener);
  },

  removeEventListener(type, listener) {
    let index = this.listeners.indexOf(listener);
    this.listeners.splice(index, 1);
  },
});

// private

let fetchFromEmberCli = async function(url, headers) {
  let endpoint = `/__fastboot-testing?${param({url, headers})}`;
  let response;
  let error;

  try {
    response = await fetch(endpoint);
  } catch (e) {
    if (e.message && e.message.match(/^Mirage:/)) {
      error = `It looks like Mirage is intercepting ember-cli-fastboot-testing's attempt to render ${url}. Please disable Mirage when running FastBoot tests.`;
    } else {
      error = `We were unable to render ${url}. Is your test suite blocking or intercepting HTTP requests? Error: ${e.message ? e.message : e}.`
    }
  }

  if (response && response.headers && response.headers.get && response.headers.get('x-fastboot-testing') !== 'true') {
    error = `We were unable to render ${url}. Is your test suite blocking or intercepting HTTP requests?`;
  }

  if (error) {
    error = `Ember CLI FastBoot Testing: ${error}`;

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
