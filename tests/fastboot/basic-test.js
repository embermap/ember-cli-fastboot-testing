import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | basic', function (hooks) {
  setup(hooks);

  test('it renders the correct h1 title', async function (assert) {
    await visit('/');

    assert.dom('h1').includesText('FastbootTesting');
  });

  test('it renders the correct og:title', async function (assert) {
    let { htmlDocument } = await visit('/');

    assert
      .dom('meta[property="og:title"]', htmlDocument)
      .hasAttribute('content', 'Fastboot testing');
  });

  test('it gets a success response code', async function (assert) {
    let { statusCode } = await visit('/');

    assert.strictEqual(statusCode, 200);
  });

  test('it preserves all query parameters', async function (assert) {
    await visit('/examples/query-parameters?first=1&second=2&third=3');

    assert.dom('h1').hasText('1 2 3');
  });
});
