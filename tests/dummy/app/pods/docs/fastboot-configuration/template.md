# FastBoot configuration

When using this addon a new FastBoot instance will be created specifically for the testing environment. The options provided to the instance can be customized through a config file.

```js
// my-app/config/fastboot-testing.js

module.exports = {
  resilient: true,
  buildSandboxGlobals(defaultGlobals) {
    return Object.assign({}, defaultGlobals, {
      SampleGlobal: `TestSampleGlobal`,
      najax
    });
  }
};
```

If no configuration file is present, then FastBoot testing will use sane defaults that make sense when testing FastBoot applications. For most applications not providing a customized configuration file is the best approach.
