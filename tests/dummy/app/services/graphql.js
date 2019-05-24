import Service from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  async request({ query, variables }) {
    let body = { query };

    if (variables) {
      body.variables = variables;
    }

    let response = await fetch('/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    });

    let { data, errors } = await response.json();

    if (errors) {
      throw errors;
    } else {
      return data;
    }
  }
});
