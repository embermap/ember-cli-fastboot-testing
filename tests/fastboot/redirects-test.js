import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | redirects test', function (hooks) {
  setup(hooks);

  test('redirects with a transition to', async function (assert) {
    let { headers, statusCode, url } = await visit(
      '/examples/redirects/transition-to',
    );

    assert.strictEqual(statusCode, 307);
    assert.strictEqual(url, '/examples');
    assert.deepEqual(headers.location, [`//${window.location.host}/examples`]);
  });

  test('redirects with a replace with', async function (assert) {
    let { headers, statusCode, url } = await visit(
      '/examples/redirects/replace-with',
    );

    assert.strictEqual(statusCode, 307);
    assert.strictEqual(url, '/examples');
    assert.deepEqual(headers.location, [`//${window.location.host}/examples`]);
  });
});
