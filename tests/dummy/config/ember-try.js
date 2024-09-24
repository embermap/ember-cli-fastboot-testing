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
            'ember-cli': '~4.12.0',
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
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-lts-5.8',
        npm: {
          devDependencies: {
            'ember-source': '~5.8.0',
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
            '@ember/test-helpers': '^2.9.3',
            'ember-cli': '~4.12.0',
            'ember-source': '~3.20.7',
            'ember-data': '~3.20.5',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^10.0.0',
          },
          // ember-cli-fastboot v3 incorrectly passed args to json-stable-stringify
          // which results in TypeError in latest versions of json-stable-stringify,
          // hence pinning.
          resolutions: {
            'json-stable-stringify': '1.0.2',
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
            '@ember/test-helpers': '^2.9.3',
            'ember-cli': '~4.12.0',
            'ember-cli-fastboot': '^2.0.0',
            'ember-data': '~3.20.5',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^10.0.0',
            'ember-source': '~3.20.7',
          },
          // ember-cli-fastboot v3 incorrectly passed args to json-stable-stringify
          // which results in TypeError in latest versions of json-stable-stringify,
          // hence pinning.
          resolutions: {
            'json-stable-stringify': '1.0.2',
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
            'ember-source': '~4.12.0',
          },
          // ember-cli-fastboot v3 incorrectly passed args to json-stable-stringify
          // which results in TypeError in latest versions of json-stable-stringify,
          // hence pinning.
          resolutions: {
            'json-stable-stringify': '1.0.2',
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
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
