import { module, test } from 'qunit';
import { setup, visit, mockServer } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | network mocking', function(hooks) {
  setup(hooks);

  test('it will not change an endpoint that already exists', async function(assert) {
    await visit('/examples/network/other/echo?message=hello%20world');
    assert.dom('[data-test-id="echo"]').hasText("hello world");
  });

  test('it can mock an array of models', async function(assert) {
    await mockServer.get('/api/posts', {
      data: [
        {
          type: 'post',
          id: '1',
          attributes: {
            title: 'test post'
          }
        },
        {
          type: 'post',
          id: '2',
          attributes: {
            title: 'test 2'
          }
        }
      ]
    });

    await visit('/examples/network/posts');

    assert.dom('[data-test-id="title-1"]').hasText("test post")
    assert.dom('[data-test-id="title-2"]').hasText("test 2")
  });

  test('it can mock a single model', async function(assert) {
    await mockServer.get('/api/posts/1', {
      data: {
        type: "posts",
        id: "1",
        attributes: {
          title: 'test post'
        }
      }
    });

    await visit('/examples/network/posts/1');

    assert.dom('[data-test-id="title"]').hasText("test post");
  });

  test('it can mock 404s', async function(assert) {
    await mockServer.get(
      '/api/posts/1',
      {
        errors: [
          { title: "Not found" }
        ]
      },
      404
    );

    await visit('/examples/network/posts/1');

    assert.dom().includesText('Ember Data Request GET /api/posts/1 returned a 404');
  });

  test('it can mock a get request', async function(assert) {
    await mockServer.get('/api/posts', [
      { id: 1, title: 'get post'},
    ]);

    await visit('/examples/network/other/get-request');

    assert.dom('[data-test-id="title-1"]').hasText("get post")
  });

  test('it can mock a post request', async function(assert) {
    await mockServer
      .post('/api/posts')
      .reply([
        {
          id: 1,
          title: 'post post'
        }
      ]);

    await visit('/examples/network/other/post-request');

    assert.dom('[data-test-id="title-1"]').hasText("post post")
  });
});
