const najax = require('najax');

module.exports = {
  resilient: false,
  buildSandboxGlobals(defaultGlobals) {
    return Object.assign({}, defaultGlobals, {
      SampleGlobal: `TestSampleGlobal`,
      najax
    });
  },
};
