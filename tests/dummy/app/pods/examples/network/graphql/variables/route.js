import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  graphql: service(),

  model(params) {
    let query = `query FindHero($id: String!) {
      hero(id: $id) {
        id,
        name
      }
    }`;

    return this.get('graphql').request({
      query,
      variables: {
        id: params.id
      }
    });
  }

});
