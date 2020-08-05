import { fetch } from 'whatwg-fetch';

let createMock = function(path, method, statusCode, response) {
  let origin = false;

  if (path.startsWith('http')) {
    const url = new URL(path);
    origin = url.origin;
    path = `${url.pathname}${url.search}`;
  }

  return fetch('/__mock-request', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path,
      method,
      statusCode,
      response,
      origin
    }),
  });
}

export let mockServer = {
  get(path, response, status = 200) {
    return createMock(path, "GET", status, response);
  },

  post(path, response, status = 200) {
    return createMock(path, "POST", status, response);
  },

  patch(path, response, status = 200) {
    return createMock(path, "PATCH", status, response);
  },

  put(path, response, status = 200) {
    return createMock(path, "PUT", status, response);
  },

  delete(path, response, status = 200) {
    return createMock(path, "DELETE", status, response);
  },

  cleanUp() {
    return fetch('/__cleanup-mocks');
  }
};
