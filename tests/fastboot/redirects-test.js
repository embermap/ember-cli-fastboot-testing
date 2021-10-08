import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | redirects test', function (hooks) {
  setup(hooks);

  test('redirects with a transition to', async function (assert) {
    let { headers, statusCode, url } = await visit(
      '/examples/redirects/transition-to'
    );

    assert.equal(statusCode, 307);
    assert.equal(url, '/');
    assert.equal(headers.location, `//${window.location.host}/`);
  });

  test('redirects with a replace with', async function (assert) {
    let { headers, statusCode, url } = await visit(
      '/examples/redirects/replace-with'
    );

    assert.equal(statusCode, 307);
    assert.equal(url, '/');
    assert.equal(headers.location, `//${window.location.host}/`);
  });
});
