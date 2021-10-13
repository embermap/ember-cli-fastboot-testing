import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class extends Route {
  @service fastboot;

  model() {
    let { data, add } = this.fastboot.get('metadata');

    return {
      data,
      add: add(1, 2),
    };
  }
}
