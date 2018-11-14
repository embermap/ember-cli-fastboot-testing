import Route from '@ember/routing/route';
import { hash } from 'rsvp'
export default Route.extend({
  async model() {
    return hash({
      posts: fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST' }).then(response => {
        return response.json()
      })
    });
  }
});
