import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  graphql: service(),

  model() {
    let query = `{ hello }`;
    return this.get('graphql').request({ query });
  }

});
