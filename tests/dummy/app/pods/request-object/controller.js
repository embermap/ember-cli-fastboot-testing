import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  fastboot: service(),

  request: readOnly('fastboot.request')
});
