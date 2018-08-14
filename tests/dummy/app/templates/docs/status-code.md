# Status code testing

> This document is a work in progress.

```js
import { module, test, skip } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

test('it gets a success response code', async function(assert) {
  let { statusCode } = await visit('/');

  assert.equal(statusCode, 200);
});

test('it gets a 404 response code', async function(assert) {
  let { statusCode } = await visit('/file-not-found');

  assert.equal(statusCode, 404);
});
```
