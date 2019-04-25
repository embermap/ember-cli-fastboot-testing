import { fetch } from 'whatwg-fetch';
import { setupContext, teardownContext } from '@ember/test-helpers';
import param from 'jquery-param';

export function setup(hooks) {
  hooks.beforeEach(function() {
    return setupContext(this);
  });

  hooks.afterEach(function() {
    return teardownContext(this);
  });
}

export async function fastboot(url, { headers = {} }) {
  let endpoint = `/__fastboot-testing?${param({url, headers})}`;
  let response = await fetch(endpoint);
  let result = await response.json();

  let body = result.err ?
    formatError(result.err) :
    extractBody(result.html);

  result.htmlDocument = parseHtml(result.html)
  result.body = body;

  return result;
}

export async function visit(url, options = {}) {
  let result;

  try {
    result = await fastboot(url, { headers: options.headers || {} });
  } catch (e) {
    let message;

    if (e.message && e.message.match(/^Mirage:/)) {
      message = `Ember CLI FastBoot Testing: It looks like Mirage is intercepting ember-cli-fastboot-testing's attempt to render ${url}. Please disable Mirage when running FastBoot tests.`;
      console.error(message);
      throw new Error(message);
    } else if (e.message) {
      message = `Ember CLI FastBoot Testing: generic error`
    } else {

    }

  }

  document.querySelector('#ember-testing').innerHTML = result.body;

  return result;
}

export function renderedHtml() {
  return document.querySelector('#ember-testing').innerHTML;
}

export function parseHtml(str) {
  let parser = new DOMParser();
  return parser.parseFromString(str, "text/html");
}

export function extractBody(html) {
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
