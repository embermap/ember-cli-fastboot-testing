# HTML tests

> This document is a work in progress.

You can test rendered HTML using `qunit-dom`.

```js
import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | testing html', function(hooks) {
  setup(hooks);

  test('it renders the correct h1 title', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('My page title!');
  });
});
```
