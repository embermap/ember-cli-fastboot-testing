import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  fastboot: service('fastboot'),
  async model() {
    const { data, add } = this.fastboot.get('metadata'); // add is a function passed via metadata
    return {
      data,
      add: add(1, 2)
    };
  }
});
