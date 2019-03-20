import { module, test } from 'qunit';
import { setup, visit, mockServer } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | mock', function(hooks) {
  setup(hooks);

  hooks.beforeEach(async function() {
    await mockServer.get('/api/')

  });

  test('it can mock a get request', async function(assert) {
    await mockServer.get('/api/posts', [
      { id: 1, title: 'test post'},
      { id: 2, title: 'test 2'},
    ]);

    await visit('/load-data');

    await this.pauseTest();

    assert.dom('[data-test-id="title-1"]').hasText("test post")
  });

  test('it can mock a post request', async function(assert) {
    await mockServer.post('/api/posts', [
      { id: 1, title: 'post post'},
    ]);

    await visit('/load-data-post');

    assert.dom('[data-test-id="title-1"]').hasText("post post")
  });

  test('')
});
