import { module, test } from 'qunit';
import { setup, visit, setHandler } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | external request', function(hooks) {
  setup(hooks);

  test('it fulfils a fastboot get request', async function (assert) {
    await visit('/externals/native-fetch-get');

    assert
      .dom('div[data-post-id="1"] h2')
      .includesText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });

  test('it handles a fastboot get request using global fetch', async function (assert) {
    setHandler(async ( /* url , options = {} */ ) => {
      return new Response(JSON.stringify([{
        id: 1,
        title: 'stubbed-request-handler',
        body: 'bar'
      }]));
    });
    await visit('/externals/native-fetch-get');

    assert
      .dom('div[data-post-id="1"] h2')
      .includesText('stubbed-request-handler');
  });

  test('it handles a fastboot post request using global fetch', async function (assert) {
    setHandler(async ( /* url , options = {} */ ) => {
      return new Response(JSON.stringify([{
        id: 1,
        title: 'stubbed-request-handler',
        body: 'bar'
      }]));
    });
    await visit('/externals/native-fetch-post');

    assert
      .dom('div[data-post-id="1"] h2')
      .includesText('stubbed-request-handler');
  });

  test('it handles a fastboot get request using ember fetch', async function (assert) {
    setHandler(async ( /* url , options = {} */ ) => {
      return new Response(JSON.stringify([{
        id: 1,
        title: 'stubbed-request-handler',
        body: 'bar'
      }]));
    });

    await visit('/externals/ember-fetch-get');

    assert
      .dom('div[data-post-id="1"] h2')
      .includesText('stubbed-request-handler');
  });

});
