import { module, test } from 'qunit';
import { setup, visit, mockServer } from 'ember-cli-fastboot-testing/test-support';

module('Fastboot | graphql mocking', function(hooks) {
  setup(hooks);

  test('it can mock a graphql request', async function(assert) {
    await mockServer
      .post('/graphql', {
        query: "{ hello }"
      })
      .reply({
        data: {
          hello: "Hello world!"
        }
      });

    await visit('/examples/network/graphql/simple');

    assert.dom('[data-test-id="hello"]').hasText("Hello world!");
  });

  test('it can mock multiple graphql requests with variables', async function(assert) {
    let query = `query FindHero($id: String!) {
      hero(id: $id) {
        id,
        name
      }
    }`;

    let heros = [{
      id: "123",
      name: "Luke Skywalker"
    },{
      id: "456",
      name: "Han Solo"
    }];

    for (let hero of heros) {
      await mockServer.post('/graphql', {
        query,
        variables: { id: hero.id }
      })
      .reply({ data: hero });
    }

    await visit('/examples/network/graphql/variables/123');

    assert.dom('[data-test-id="id"]').hasText("123");
    assert.dom('[data-test-id="name"]').hasText("Luke Skywalker");

    await visit('/examples/network/graphql/variables/456');

    assert.dom('[data-test-id="id"]').hasText("456");
    assert.dom('[data-test-id="name"]').hasText("Han Solo");
  });
});
