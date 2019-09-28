# FastBoot configuration

When using this addon a new FastBoot instance will be created specifically for the testing environment. The options provided to the instance can be customized through a config file.

```js
// my-app/config/fastboot-tesitng.js

module.exports = {
  resilient: true,
  sandboxGlobals: {
    someGlobalForFastboot: 'Hello world!'
  }
};
```

If no configuration file is present, then FastBoot testing will use sane defaults that make sense when testing FastBoot applications. For most applications not providing a customized configuration file is the best approach.

## Setup

These options can also contain a `setupFastboot` function that will be passed the FastBoot instance after it's created. This is helpful if you need to inspect or modify any data related to your FastBoot application.

```js
// my-app/config/fastboot-tesitng.js

module.exports = {
  setupFastboot(fastbootInstance) {
    console.log('Fastboot testing is using this fastboot instance...');
    console.log(fastbootInstance);
  }
}
```
