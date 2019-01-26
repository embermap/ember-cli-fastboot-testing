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

> TODO: This is harder!
