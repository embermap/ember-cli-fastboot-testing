# Network mocking

It's common for Ember test suites to rely on mirage, pretender, or http-mocks to control the HTTP responses given to their application during test.

While these tools work well for mocking HTTP requests in the browser, they do not run inside of node. This makes it difficult to mock the HTTP responses given to a FastBoot server under test.

Fortunately, the node ecosystem has a number of HTTP mocking libraries. For example, [nock](https://github.com/nock/nock) can be used to intercept network requests made from a node application.

## Global responses

This example defines a global endpoint `/hello.json` that will return a JSON response for any FastBoot test.

The `beforeCreate` hook is a good place to load fixtures or define API responses that you would want to exist in every FastBoot test.

```js
// config/fastboot-testing-hooks.js

let nock = require('nock');

module.exports = function(hooks) {

  hooks.beforeCreate(() => {

    nock.get('/hello.json')
      .reply(200, { id: 123, message: "hello!" });

  });

};
```

## Per test responses

You may want to add mocks specific to a single FastBoot test. Currently, there is no high level API to accomplish this, but with hooks such a system can be built.

The code below creates an express middleware that lets your FastBoot tests define their own mocks. These mocks are then created using nock before any calls are made to FastBoot. Once FastBoot has finished generating a response, these mocks are destroyed.

```js
let perTestMocks = [];

modules.exports = function(hooks) {

  // the middleware exposes an endpoint letting our tests
  // create mocks.
  hooks.middleware(({ app, fastbootTesting }) => {
    app.post('/create-fastboot-testing-mock', (res, res) => {
      let urlToMock = req.body.urlToMock;
      let mockStatusCode = req.body.mockStatusCode;
      let mockResponse = req.body.mockResponse;

      let mock = nock.get(urlToMock)
        .reply(mockStatusCode, mockResponse);

      perTestMocks.push(mock);

      res.send(201);
    });

    app.use(fastbootTesting);
  });

  // the after visit hook will clear out all mocks that were created
  // for our test.
  hooks.afterVisit(() => {
    perTestMocks.forEach(mock => nock.removeInterceptor(mock));

    perTestMocks = [];
  });
}
```

Next, each of our FastBoot tests can create their own mocks using the `/create-fastboot-testing-mock` endpoint. Here's an exa

```js
import fetch from 'fetch';
import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | The posts page', function(hooks) {
  setup(hooks);

  test('it renders a post', async function(assert) {

    await fetch("/create-fastboot-testing-mock", {
      method: "post",
      body: JSON.stringify({
        urlToMock: '/api/posts/1',
        mockStatusCode: 200,
        mockResponse: {
          title: "Hello world!",
          body: "..."
        }
      })
    });

    await visit('/posts/1');

    assert.dom('h1.title').includesText('Hello world!');
  });

  test('it renders a post', async function(assert) {

    await fetch("/create-fastboot-testing-mock", {
      method: "post",
      body: JSON.stringify({
        urlToMock: '/api/posts/1',
        mockStatusCode: 404,
      })
    });

    await visit('/posts/1');

    assert.dom('h1.title').includesText('Post not found');
  });
});
```
