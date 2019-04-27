import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';
import Pretender from 'pretender';

/*
  This test is setup to emulate the following scenario: Someone is using
  FastBoot testing as well as an http interceptor for mocking.
  When FastBoot testing asks ember-cli to render a page, the interceptor
  will block the http request and attempt to return a mock.

  We'll simulate this by overriding fetch.

  We want to provide a better error message when that happens.
*/
module('Fastboot | generic interceptor', function(hooks) {
  setup(hooks);

  test('it doesnt work if an interceptor blocks our request to ember-cli', async function(assert) {
    let server = new Pretender(function() {
      this.get('/__fastboot-testing', () => {
        throw new Error("Blocked!");
      });
    });

    assert.rejects(
      visit('/'),
      /We were unable to render \/. Is your test suite blocking or intercepting HTTP requests\? Error: Pretender intercepted GET \/__fastboot-testing\?url=%2F but encountered an error: Blocked/
    );

    server.shutdown();
  });

  test('mocked response', function(assert) {
    let server = new Pretender(function() {
      this.get('/__fastboot-testing', () => {
        return [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify({ mocked: true })
        ];
      });
    });

    assert.rejects(
      visit('/'),
      /We were unable to render \/. Is your test suite blocking or intercepting HTTP requests\?/
    );

    server.shutdown();
  });
});
