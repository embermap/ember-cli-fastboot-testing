import { fetch } from 'whatwg-fetch';

let createMock = function (
  path,
  method,
  statusCode,
  response,
  responseHeaders,
) {
  let origin = false;

  if (path.startsWith('http')) {
    const url = new URL(path);
    origin = url.origin;
    path = `${url.pathname}${url.search}`;
  }

  return fetch('/__mock-request', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      path,
      method,
      statusCode,
      response,
      responseHeaders,
      origin,
    }),
  });
};

export let mockServer = {
  get(path, response, status = 200, responseHeaders) {
    return createMock(path, 'GET', status, response, responseHeaders);
  },

  post(path, response, status = 200, responseHeaders) {
    return createMock(path, 'POST', status, response, responseHeaders);
  },

  patch(path, response, status = 200, responseHeaders) {
    return createMock(path, 'PATCH', status, response, responseHeaders);
  },

  put(path, response, status = 200, responseHeaders) {
    return createMock(path, 'PUT', status, response, responseHeaders);
  },

  delete(path, response, status = 200, responseHeaders) {
    return createMock(path, 'DELETE', status, response, responseHeaders);
  },

  cleanUp() {
    return fetch('/__cleanup-mocks');
  },
};
