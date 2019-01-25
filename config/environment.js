'use strict';

module.exports = function(environment, appConfig) {
  if (environment === 'test') {
    appConfig.fastboot = appConfig.fastboot || {};
    appConfig.fastboot.hostWhitelist = appConfig.fastboot.hostWhitelist || [];

    if (!appConfig.fastboot.hostWhitelist.includes('localhost')) {
      appConfig.fastboot.hostWhitelist.push('localhost');
    }
  }

  return { };
};
