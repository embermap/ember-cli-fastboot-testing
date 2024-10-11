const najax = require('najax');
const semver = require('semver');
const { URL } = require('node:url');

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
          /**
           * Use WHATWG URL API.
           *
           * @see {@link https://github.com/glimmerjs/glimmer-vm/blob/master/packages/%40glimmer/runtime/lib/dom/sanitized-values.ts#L62}
           */
          URL,
          AbortController,

          // This is being actively used throughout codebase in many places.
          URLSearchParams,
          fetch: require('node-fetch'),
        });
      },
    };
  };
}
