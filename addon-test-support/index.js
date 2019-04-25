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
  let result = await fastboot(url, { headers: options.headers || {} });

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
