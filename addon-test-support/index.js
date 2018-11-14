import fetch from 'fetch';
import { setupContext, teardownContext } from '@ember/test-helpers';

export function setup(hooks) {
  let socket;

  hooks.beforeEach(function() {
    socket = setupRequestHandler();
    setHandler(null);
    return setupContext(this);
  });

  hooks.afterEach(function() {
    if (socket) socket.close();
    return teardownContext(this);
  });
}

export async function fastboot(url) {
  let encodedURL = encodeURIComponent(url);
  let endpoint = `/__fastboot-testing?url=${encodedURL}`;
  let response = await fetch(endpoint);
  let result = await response.json();

  let body = extractBody(result.html);

  result.body = body;
  result.htmlDocument = parseHtml(result.html)

  return result;
}

export async function visit(url) {
  let result = await fastboot(url);

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

let requestHandler = null;
export function setHandler(h) {
  requestHandler = h;
}

function setupRequestHandler() {
  let ws = new WebSocket('ws://127.0.0.1:7001');
  ws.onopen = function() {};
  ws.onmessage = function(event) {
    try {
      let message = JSON.parse(event.data);
      if (message.type === 'request') {
        let responsePromise;
        if (requestHandler) {
          // use request handler provided by the test
          responsePromise = requestHandler(message.url, message.options)
        } else {
          // Perform the fetch on the client side
          responsePromise = fetch(message.url, message.options)
        }

        let nodeResponse;

        responsePromise
          .then((response) => {
            nodeResponse = response;
            return response.text()
          })
          .then((body) => {
            let data = {
              status: nodeResponse.status,
              statusText: nodeResponse.statusText,
              headers: nodeResponse.headers,
              body
            }

            ws.send(JSON.stringify({
              type: 'response',
              url: message.url,
              data
            }));
          });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  return ws;
}
