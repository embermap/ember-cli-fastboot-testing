import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    routes() {
      // These comments are here to help you get started. Feel free to delete them.
      /*
        Config (with defaults).

        Note: these only affect routes defined *after* them!
      */
      // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
      // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
      // this.timing = 400;      // delay for each request, automatically set to 0 during testing
      /*
        Shorthand cheatsheet:

        this.get('/notes');
        this.post('/notes');
        this.get('/notes/:id');
        this.put('/notes/:id'); // or this.patch
        this.del('/notes/:id');

        this.resource('user')

        http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
      */
    },
  };

  return createServer(finalConfig);
}
