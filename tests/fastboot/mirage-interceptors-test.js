import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


/*
  This test is setup to emulate the following scenario: Someone is using
  FastBoot testing as well as a local mirage server. When FastBoot testing
  asks ember-cli to render a page, mirage will intercept the http request and
  then say it didnt know how to handle the request.

  We want to provide a better error message when that happens.
*/
module('Fastboot | mirage interceptor', function(hooks) {
  setup(hooks);
  setupMirage(hooks);

  test('it doesnt work if mirage blocks our http request to ember-cli', async function(assert) {
    assert.rejects(
      visit('/'),
      /It looks like Mirage is intercepting ember-cli-fastboot-testing's attempt to render \//
    );
  });

});
