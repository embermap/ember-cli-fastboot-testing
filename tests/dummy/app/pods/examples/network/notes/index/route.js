import Route from '@ember/routing/route';

export default class extends Route {
  async model() {
    return this.store.findAll('note');
  }
}
