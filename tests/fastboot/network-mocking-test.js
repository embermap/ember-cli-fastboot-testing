import { module, test } from 'qunit';
import { setup, visit, mockServer } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | network mocking', function(hooks) {
  setup(hooks);

  test('it can mock a get request', async function(assert) {
    await mockServer.get('/api/posts', [
      { id: 1, title: 'test post'},
      { id: 2, title: 'test 2'},
    ]);

    await visit('/examples/network/get');

    assert.dom('[data-test-id="title-1"]').hasText("test post")
    assert.dom('[data-test-id="title-2"]').hasText("test 2")
  });

  test('it can mock a post request', async function(assert) {
    await mockServer.post('/api/posts', [
      { id: 1, title: 'post post'},
    ]);

    await visit('/examples/network/post');

    assert.dom('[data-test-id="title-1"]').hasText("post post")
  });
});
