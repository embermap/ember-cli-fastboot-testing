var ajaxStub = function (options) {
  throw options;
};

export default {
  name: 'ajax-service',
  initialize: function (application) {
    application.register('ajax:node', ajaxStub , {
      instantiate: false
    });
    application.inject('adapter', '_ajaxRequest', 'ajax:node');
    application.inject('adapter', 'fastboot', 'service:fastboot');
  }
};
