import Route from '@ember/routing/route';

export default class extends Route {
  model() {
    throw 'This errors in FastBoot!';
  }
}
