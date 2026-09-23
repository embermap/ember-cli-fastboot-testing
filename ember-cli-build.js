'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const { setConfig } = require('@warp-drive/build-config/cjs-set-config.cjs');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    // Add options here
    '@embroider/macros': {
      setConfig: {
        // WarpDrive: {
        //   polyfillUUID: true,
        //   deprecations: {
        //     DEPRECATE_TRACKING_PACKAGE: false,
        //   },
        // },
      },
    },
    autoImport: {
      forbidEval: true,
    },
  });

  setConfig(app, __dirname, {
    compatWith: '4.23',
    polyfillUUID: true,
    deprecations: {
      DEPRECATE_TRACKING_PACKAGE: false,
    },
  });

  app.import('vendor/tailwind.min.css');

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
