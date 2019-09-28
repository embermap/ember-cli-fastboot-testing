# Debugging

## Pause test

The `pauseTest` helper can be used to inspect FastBoot rendered HTML.

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

## Node debugging

The following video shows how to use Node's built in debugging tools to inspect a FastBoot application.

<section class="text-left">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/dC9q98t8Oeo?rel=0"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen></iframe>
</section>
