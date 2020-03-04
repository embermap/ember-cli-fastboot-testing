import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | environment', function(hooks) {
  setup(hooks);

  test('it renders the correct h1 title', async function(assert) {
    await visit('/examples/environment');
    assert.dom('h1').includesText('specified-by-user');
  });
});
