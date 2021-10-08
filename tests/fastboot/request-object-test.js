import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | request object test', function (hooks) {
  setup(hooks);

  test('it has a host', async function (assert) {
    await visit('/examples/request-object');

    assert.dom('[data-test-id=host]').includesText(window.location.host);
  });

  test('it has a protocol', async function (assert) {
    await visit('/examples/request-object');

    assert.dom('[data-test-id=protocol]').includesText('http:');
  });

  test('it has headers', async function (assert) {
    await visit('/examples/request-object');

    assert.dom('[data-test-id=headers]').includesText('host: localhost');
  });

  test('it has user agent in headers', async function (assert) {
    await visit('/examples/request-object');

    assert
      .dom('[data-test-id=headers] [data-header-name=user-agent]')
      .includesText('user-agent: ');
  });

  test('it can override header in visit request', async function (assert) {
    await visit('/examples/request-object', {
      headers: {
        'user-agent': 'ember-cli-fastboot-testing',
      },
    });

    assert
      .dom('[data-test-id=headers] [data-header-name=user-agent]')
      .includesText('user-agent: ember-cli-fastboot-testing');
  });

  test('it includes cookies in request headers', async function (assert) {
    // Make sure at least *some* cookie is present otherwise cookie header does not exist.
    document.cookie = 'foo=bar; path=/';

    await visit('/examples/request-object');

    assert
      .dom('[data-test-id=headers] [data-header-name=cookie]')
      .includesText('cookie: ');

    // Delete dummy cookie
    document.cookie = 'foo=bar; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  });

  test('it can specify cookies header in visit request', async function (assert) {
    await visit('/examples/request-object', {
      headers: {
        cookie: 'test_cookie=test; user_id=what-user005;',
      },
    });

    assert
      .dom('[data-test-id=headers] [data-header-name=cookie]')
      .includesText('cookie: test_cookie=test; user_id=what-user005;');
  });

  test('it has query params', async function (assert) {
    await visit('/examples/request-object?testing=true');

    assert.dom('[data-test-id=query-params]').includesText('testing: true');
  });

  test('it has a path', async function (assert) {
    await visit('/examples/request-object');

    assert.dom('[data-test-id=path]').includesText('/examples/request-object');
  });

  test('it has a method', async function (assert) {
    await visit('/examples/request-object');

    assert.dom('[data-test-id=method]').includesText('GET');
  });
});
