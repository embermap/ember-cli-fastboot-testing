import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({

  // this endpoint is defined in index.js, it's used to represent
  // a url that ember-cli might already have in it's express router.

  // we should be able to post a body to this echo endpoint and
  // get a reply back.
  model(params) {
    return fetch('/fastboot-testing/echo', {
      method: 'POST',
      body: params.message
    }).then(response => {
      return response.text();
    });
  }

});
