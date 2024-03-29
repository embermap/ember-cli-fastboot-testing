'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
          },
        },
      },
      {
        name: 'fastboot-1.2',
        npm: {
          dependencies: {
            fastboot: '~1.2.1',
          },
          devDependencies: {
            'ember-source': '~3.20.7',
            'ember-data': '~3.20.5',
            'ember-qunit': '^5.1.5',
          },
        },
      },
      {
        name: 'fastboot-2.0',
        npm: {
          dependencies: {
            fastboot: '~2.0.3',
          },
          devDependencies: {
            'ember-cli-fastboot': '^2.0.0',
            'ember-data': '~3.20.5',
            'ember-qunit': '^5.1.5',
            'ember-source': '~3.20.7',
          },
        },
      },
      {
        name: 'fastboot-3.0',
        npm: {
          dependencies: {
            fastboot: '^3.0.0',
          },
          devDependencies: {
            'ember-cli-fastboot': '^3.0.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
          },
          ember: {
            edition: 'classic',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
