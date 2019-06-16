import { module, test } from 'qunit';
import { setup, visit, nock } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | nock proxy', function(hooks) {
  setup(hooks);

  test('it will not change an endpoint that already exists', async function(assert) {
    await visit('/examples/network/other/echo?message=hello%20world');
    assert.dom('[data-test-id="echo"]').hasText("hello world");
  });

  test('it can mock an array of models', async function(assert) {
    await nock('http://localhost:7357')
      .intercept('/api/notes', 'GET')
      .reply(200, {
        data: [
          {
            type: 'note',
            id: '1',
            attributes: {
              title: 'test note'
            }
          },
          {
            type: 'note',
            id: '2',
            attributes: {
              title: 'test 2'
            }
          }
        ]
      });

    await visit('/examples/network/notes');

    assert.dom('[data-test-id="title-1"]').hasText("test note")
    assert.dom('[data-test-id="title-2"]').hasText("test 2")
  });

  test('it can mock a single model', async function(assert) {
    await nock('http://localhost:7357')
      .intercept('/api/notes/1', 'GET')
      .reply(200, {
        data: {
          type: "notes",
          id: "1",
          attributes: {
            title: 'test note'
          }
        }
      });

    await visit('/examples/network/notes/1');

    assert.dom('[data-test-id="title"]').hasText("test note");
  });

  test('it can mock 404s', async function(assert) {
    await nock('http://localhost:7357')
      .intercept('/api/notes/1', 'GET')
      .reply(404, {
        errors: [
          { title: "Not found" }
        ]
      });

    await visit('/examples/network/notes/1');

    assert.dom().includesText('Ember Data Request GET /api/notes/1 returned a 404');
  });

  test('it can mock a get request', async function(assert) {
    await nock('http://localhost:7357')
      .intercept('/api/notes', 'GET')
      .reply(200, [
        { id: 1, title: 'get note' },
      ]);

    await visit('/examples/network/other/get-request');

    assert.dom('[data-test-id="title-1"]').hasText("get note")
  });

  test('it can mock a post request', async function(assert) {
    await nock('http://localhost:7357')
      .intercept('/api/notes', 'POST')
      .reply(200, [
        { id: 1, title: 'post note' },
      ]);

    await visit('/examples/network/other/post-request');

    assert.dom('[data-test-id="title-1"]').hasText("post note")
  });
});
