'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {});

  app.import('vendor/tailwind.min.css');

  return app.toTree();
};
