import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | errors', function (hooks) {
  setup(hooks);

  test('it displays fastboot errors', async function (assert) {
    await visit('/examples/errors/throw-message');

    assert.dom().includesText('This errors in FastBoot!');
  });

  test('it displays fastboot error objects', async function (assert) {
    await visit('/examples/errors/throw-error-object');

    assert.dom().includesText('This errors in FastBoot!');
  });

  test('it displays fastboot errors like trying to access document', async function (assert) {
    await visit('/examples/errors/access-document');

    assert.dom().includesText('ReferenceError: document is not defined');
  });
});
