import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  fastboot: service('fastboot'),
  async model() {

    return this.fastboot.get('metadata');
  }
});