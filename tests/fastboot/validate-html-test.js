import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | validate html', function(hooks) {
  setup(hooks);

  test('it renders valid html', async function(assert) {
    let { isValidHtml } = await visit('/html/simple-valid');

    assert.ok(isValidHtml);
  });

  test('it renders invalid html', async function(assert) {
    // this route has a template with invalid html, specifically,
    // it puts block elements inside of a p tag.
    let { isValidHtml }= await visit('/html/simple-invalid');

    assert.notOk(isValidHtml);
  });
});
