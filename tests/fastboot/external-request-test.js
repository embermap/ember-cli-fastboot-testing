import { module, test } from 'qunit';
import { setup, visit, setHandler } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | external request', function(hooks) {
  setup(hooks);

  test('it renders an external request', async function(assert) {
    await visit('/external-request');

    assert
      .dom('div[data-post-id="1"] h2')
      .includesText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });

  test('it allows the server request to be stubbed on the client side', async function (assert) {
    setHandler(async ( /* url , options = {} */ ) => {
      return new Response(JSON.stringify([{
        id: 1,
        title: 'stubbed-request-handler',
        body: 'bar'
      }]));
    });
    await visit('/external-request');

    assert
      .dom('div[data-post-id="1"] h2')
      .includesText('stubbed-request-handler');
  });
});
