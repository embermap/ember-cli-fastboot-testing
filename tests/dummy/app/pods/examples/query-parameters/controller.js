import Controller from '@ember/controller';

export default class extends Controller {
  queryParams = ['first', 'second', 'third'];
  first = null;
  second = null;
  third = null;
}
