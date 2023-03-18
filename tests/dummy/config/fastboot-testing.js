const najax = require('najax');
const semver = require('semver');

const version = require(require.resolve('fastboot/package.json')).version;

if (semver.lt(version, '3.0.0')) {
  module.exports = {
    resilient: false,
    sandboxGlobals: {
      SampleGlobal: 'TestSampleGlobal',
    },
  };
} else {
  module.exports = () => {
    return {
      resilient: false,
      buildSandboxGlobals(defaultGlobals) {
        return Object.assign({}, defaultGlobals, {
          SampleGlobal: 'TestSampleGlobal',
          najax,
        });
      },
    };
  };
}
