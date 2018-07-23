import { module, test } from 'qunit';
import { visit, correctlyRendered } from 'fastboot-testing/test-support';

module('Fastboot | basic', function() {
  test('a basic visiting test', async function(assert) {
    let { html } = await visit('/');

    assert.ok(correctlyRendered(html));
  });
});
