import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    throw new Error("This errors in FastBoot!");
  }

});
