import Route from '@ember/routing/route';
import fetch from 'fetch';
import config from 'dummy/config/environment';

export default class extends Route {
  async model() {
    const { originForOverride } = config;
    let response = await fetch(`${originForOverride}/api/notes`, {
      method: 'get',
    });
    return await response.json();
  }
}
