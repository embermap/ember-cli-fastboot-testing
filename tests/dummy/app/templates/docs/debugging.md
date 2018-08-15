# Debugging

> This document is a work in progress.

## Inspecting HTML

You can use the `pauseTest` helper to inspect FastBoot rendered HTML.

```js
import { module, test, skip } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | debugging test', function(hooks) {
  setup(hooks);

  test('it renders the correct html', async function(assert) {
    await visit('/');

    await this.pauseTest();

    // ...
  });
});
```
