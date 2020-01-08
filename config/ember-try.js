"use strict";

const getChannelURL = require("ember-source-channel-url");

module.exports = function() {
  return Promise.all([
    getChannelURL("release"),
    getChannelURL("beta"),
    getChannelURL("canary")
  ]).then(urls => {
    return {
      useYarn: true,
      scenarios: [
        {
          name: "ember-lts-2.18",
          npm: {
            devDependencies: {
              "ember-source": "~2.18.0",
              "ember-data": "~2.18.0"
            }
          }
        },
        {
          name: "ember-lts-3.4",
          npm: {
            devDependencies: {
              "ember-source": "~3.4.0",
              "ember-data": "~3.4.0"
            }
          }
        },
        {
          name: "ember-lts-3.8",
          npm: {
            devDependencies: {
              "ember-source": "~3.8.0",
              "ember-data": "~3.8.0"
            }
          }
        },
        {
          name: "ember-lts-3.12",
          npm: {
            devDependencies: {
              "ember-source": "~3.12.0",
              "ember-data": "~3.12.0"
            },
            resolutions: {
              "ember-data": "~3.12.0"
            }
          }
        },
        {
          name: "fastboot-1.2",
          npm: {
            devDependencies: {
              "ember-source": "~3.4.0",
              "ember-data": "~3.4.0",
              fastboot: "~1.2.0"
            }
          }
        },
        {
          name: "ember-release",
          npm: {
            devDependencies: {
              "ember-source": urls[0],
              "ember-data": "latest"
            }
          }
        },
        {
          name: "ember-beta",
          npm: {
            devDependencies: {
              "ember-source": urls[1],
              "ember-data": "latest"
            },
            resolutions: {
              "ember-data": "latest"
            }
          }
        },
        {
          name: "ember-canary",
          npm: {
            devDependencies: {
              "ember-source": urls[2],
              "ember-data": "latest"
            },
            resolutions: {
              "ember-data": "latest"
            }
          }
        }
      ]
    };
  });
};
