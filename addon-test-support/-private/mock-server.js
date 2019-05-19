import { fetch } from 'whatwg-fetch';

let createMock = async function({ path, method, body, statusCode, response }) {
  return await fetch('/__mock-request', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path,
      body,
      method,
      statusCode,
      response
    }),
  });
}

let mockServer = {
  get(path, response, statusCode = 200) {
    // when needed we'll change this to use something like MockGet
    // see MockPost for the idea
    return createMock({
      path,
      method: "GET",
      statusCode,
      response
    });
  },

  post(path, body = {}) {
    return new MockPost({ path, body });
  },

  async cleanUp() {
    return fetch('/__cleanup-mocks');
  }
};

class MockPost {
  constructor({ path, body }) {
    this.path = path;
    this.body = body;
    this.status = 200;
  }

  statusCode(status) {
    this.status = status;
    return this;
  }

  reply(response) {
    return createMock({
      path: this.path,
      body: this.body,
      method: "POST",
      statusCode: this.status,
      response
    });
  }
}

export { mockServer };
