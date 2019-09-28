# Quickstart

Install the addon.

```bash
ember install ember-cli-fastboot-testing
```

Use the generator to create your first fastboot test.

```bash
ember g fastboot-test home-page
```

Open the test file, `tests/fastboot/home-page-test.js`.

```js
import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | home-page test', function(hooks) {
  setup(hooks);

  test('it renders a page...', async function(assert) {
    await visit('/');

    // replace this line with a real assertion!
    assert.ok(true);
  });

});
```

Replace the assertion with one that verifies the title on your home page.

```diff
- assert.ok(true);
+ assert.dom('h1').hasText('Welcome!');
```

Now run your test suite and visit the testem URL.

```bash
ember test --server
```
