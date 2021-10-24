'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.4',
        npm: {
          devDependencies: {
            'ember-source': '~3.4.0',
            'ember-data': '~3.4.0',
          },
        },
      },
      {
        name: 'ember-lts-3.8',
        npm: {
          devDependencies: {
            'ember-source': '~3.8.0',
            'ember-data': '~3.8.0',
          },
        },
      },
      {
        name: 'ember-lts-3.12',
        npm: {
          devDependencies: {
            'ember-source': '~3.12.0',
            'ember-data': '~3.12.0',
          },
          resolutions: {
            'ember-data': '~3.12.0',
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
            'ember-source': '~3.4.0',
            'ember-data': '~3.4.0',
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
            'ember-source': '~3.4.0',
            'ember-data': '~3.4.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            // at the time of writing this the current 'latest' of ember-data is
            // 3.15, which is broken in fastboot. we're going to use 3.13 since it's
            // the closest working version
            "ember-data": "~3.28.0"
          },
          resolutions: {
            "ember-data": "~3.28.0"
          }
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
            'ember-data': 'canary',
          },
          resolutions: {
            'ember-data': 'canary',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
