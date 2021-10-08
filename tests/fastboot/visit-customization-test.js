import { module, skip } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | visit customization', function (hooks) {
  setup(hooks);

  // this test doesnt work in ember 2.x
  skip('it renders the correct metadata', async function (assert) {
    await visit('/examples/visit-customization', {
      metadata: {
        data: 'data in metadata',
        add: (a, b) => a + b,
      },
    });

    assert.dom('[data-test-id="metadata-data"]').hasText('data in metadata');
    assert.dom('[data-test-id="metadata-fn"]').hasText('3');
  });
});
