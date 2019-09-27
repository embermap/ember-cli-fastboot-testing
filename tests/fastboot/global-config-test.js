import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | global config', function(hooks) {
  setup(hooks);

  test('it renders the correct h1 title', async function(assert) {
    await visit('/examples/global-config');
    assert.dom('#sandboxGlobals').hasText('Modified TestSampleGlobal');
  });
});
