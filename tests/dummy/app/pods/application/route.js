import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  headData: service(),

  afterModel() {
    this.set('headData.title', 'Fastboot testing');
  }
});
