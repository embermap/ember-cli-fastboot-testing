# Status code tests

> This document is a work in progress.

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
