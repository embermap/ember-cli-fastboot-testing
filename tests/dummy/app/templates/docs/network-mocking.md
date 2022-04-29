# Network mocking

Just about every Ember application ends up having pages that depend on data from an external API. It's common to use tools like [Mirage](https://www.ember-cli-mirage.com/) to mock the network when testing these applications.

It makes sense that we would also want to mock the network while running FastBoot tests. However, since FastBoot runs inside of Node.js, we'll need to use a network mocking library that is written for node.

FastBoot Testing exposes an API for intercepting requests made from your FastBoot app.

The following example shows how to mock a test that fetches note data.

```js
import { module, test } from 'qunit';
import { setup, visit, mockServer } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | Note page', function(hooks) {
  setup(hooks);

  test('it can render a note', async function(assert) {
    await mockServer.get('/api/notes/1', {
      data: {
        type: 'note',
        id: '1',
        attributes: {
          title: 'Hello world!'
        }
      }
    });

    await visit('/notes/1');

    assert.dom('[data-test-id="title"]').hasText("Hello world!");
  });
});
```

The `mockServer#get` method maps a URL to a response for the lifecycle of the test. At the end of each test the `mockServer` is reset.

By default, the `mockServer` will use a status code of 200. However, an optional status code can be passed in as the third parameter.

```js
test('it renders the 404 page when it cannot fetch a note', async function(assert) {
  await mockServer.get(
    '/api/notes/1',
    { error: 'Note not found' },
    404
  );

  await visit('/notes/1');

  assert.dom('[data-test-id="page-not-found"]').exists();
});
```

By default, passing just a path to `mockServer` will use the current host running your app.

Some implementations require a different origin for `mockServer` calls. In that case, you can override the default host by including the hostname with the path.

```js
test('it makes a call to a different host', async function(assert) {
  await mockServer.get('http://localhost:3000/api/notes/1', {
    data: {
      type: 'note',
      id: '1',
      attributes: {
        title: 'Hello world!'
      }
    }
  });

  await visit('/notes/1');

  assert.dom('[data-test-id="page-not-found"]').exists();
});
```

The `mockServer` also exposes `post`, `patch`, `put`, and `delete` mocking methods.

## Video

This following video shows how [EmberMap](https://embermap.com) uses FastBoot testing's networking mocking.

<section class="text-left">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/YULScHACcus?rel=0"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen></iframe>
</section>
