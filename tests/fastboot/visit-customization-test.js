import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | visit customization', function(hooks) {
  setup(hooks);

  test('it renders the correct h1 title', async function(assert) {
    const metadata = {
      data: 'data in metadata',
      add: (a, b) => a + b
    };
    await visit('/examples/visit-customization', { metadata });

    assert.dom('#metadata-data').hasText('data in metadata');
    assert.dom('#metadata-fn').hasText('3');
  });
});
