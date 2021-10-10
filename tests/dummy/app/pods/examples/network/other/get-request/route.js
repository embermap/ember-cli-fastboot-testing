import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class extends Route {
  async model() {
    let response = await fetch('/api/notes');
    return await response.json();
  }
}
