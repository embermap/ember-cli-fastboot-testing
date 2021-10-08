import Route from '@ember/routing/route';

export default class extends Route {
  model() {
    throw new Error('This errors in FastBoot!');
  }
}
