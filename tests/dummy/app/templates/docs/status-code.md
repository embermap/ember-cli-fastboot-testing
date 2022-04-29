# Status code tests

In an Ember application the `index.html` file acts as the application's bootstrap file. It loads all of the JavaScript and then initializes the application.

If we think about this, that means that every Ember application's initial render starts off as an HTTP 200. Once the application is fully initialized we can then decide on the client if we should redirect to another route, or render one of Ember's error templates.

However, once we introduce FastBoot and have our application running on the server, we get the ability to use other HTTP status codes.

We can use 300 status codes for routes that redirect, and 400/500 status codes when there is a rendering error.

FastBoot testing provides support for testing status codes. The `visit` helper will return a `statusCode` with every request it makes.


```js
import { module, test, skip } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | status code test', function(hooks) {
  setup(hooks);

  test('it gets a success response code', async function(assert) {
    let { statusCode } = await visit('/');

    assert.equal(statusCode, 200);
  });

  test('it gets a 404 response code', async function(assert) {
    let { statusCode } = await visit('/file-not-found');

    assert.equal(statusCode, 404);
  });
});
```
