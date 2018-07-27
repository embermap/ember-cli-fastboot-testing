import { module, test, skip } from 'qunit';
import { setup, visit, renderedHtml } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | basic', function(hooks) {
  setup(hooks);

  skip('it renders html that matches the browser', async function(assert) {
    let { body } = await visit('/');

    assert.equal(body, renderedHtml());
  });

  test('it renders the correct h1 title', async function(assert) {
    await visit('/');

    assert.dom('h1').includesText('FastbootTesting');
  });

  test('it renders the correct og:title', async function(assert) {
    let { htmlDocument } = await visit('/');

    assert
      .dom('meta[property="og:title"]', htmlDocument)
      .hasAttribute('content', 'Fastboot testing');
  });

  test('it gets a success response code', async function(assert) {
    let { statusCode } = await visit('/');

    assert.equal(statusCode, 200);
  });

});
