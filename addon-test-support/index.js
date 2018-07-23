import request from 'ember-ajax/request';

export async function visit(url, options = {}) {
  let endpoint = `/__fastboot-testing?url=${url}`;
  let result = await request(endpoint, options);

  document.querySelector('#ember-testing').innerHTML = result.html;

  return result;
}

export function correctlyRendered(html, rendered = null) {
  if (rendered === null) {
    rendered = document.querySelector('#ember-testing').innerHTML;
  }

  debugger;

  return html === rendered;
}
