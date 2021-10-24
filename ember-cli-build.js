'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    // Workaround for https://github.com/ember-cli/ember-cli/issues/8075
    'ember-cli-uglify': {
      uglify: {
        compress: {
          collapse_vars: false,
        },
      },
    },
  });

  app.import('vendor/tailwind.min.css');

  return app.toTree();
};
