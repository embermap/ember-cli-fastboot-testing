import Route from '@ember/routing/route';
// import fetch from 'fetch';
import { hash } from 'rsvp'
export default Route.extend({
  async model() {
    return hash({
      posts: fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json()
      })
    });
  }
});
