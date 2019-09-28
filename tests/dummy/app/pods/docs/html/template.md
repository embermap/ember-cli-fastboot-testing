# HTML tests

Testing FastBoot rendered HTML is the most common use case for this library. Any HTML rendered by FastBoot can be tested the same way you would test an Ember application with `qunit-dom`.

```js
import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | testing html', function(hooks) {
  setup(hooks);

  test('it renders the correct h1 title', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('My page title!');
  });
});
```
