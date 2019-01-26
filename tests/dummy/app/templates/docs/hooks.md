> This code does not exist, we're using this document to help find the API for what hooks might look like.

# Hooks

Hooks allow you to run server side node code before and after interacting with the FastBoot instance. Hooks provide a place for:

* Configuring the FastBoot instance
* Mocking network requests made from FastBoot
* Adding middleware to the express app

All hooks are defined inside of your application's `config/fastboot-testing-hooks.js` file.

## Config hook

The `defaultConfig` hook lets you define configuration options for creating the FastBoot instance. For example, if you wanted `ember-cli-fastboot-testing` to not fail a test when there is a FastBoot rendering error you can turn on `resilient` mode.

```js
// config/fastboot-testing-hooks.js

module.exports = function(hooks) {
  hooks.defaultConfig({
    resilient: true
  });
};
```

To see a full list of configuration options take a look at the [FastBoot documentation](https://github.com/ember-fastboot/fastboot#additional-configuration).

## Before create hook

The `beforeCreate` is called during your test build right before the FastBoot instance is created.

This hook is a great place for you to setup global testing mocks. See the [networking mocking](network-mocking) guide for an example of setting up HTTP fixtures with FastBoot testing.

```js
// config/fastboot-testing-hooks.js

module.exports = function(hooks) {

  hooks.beforeCreate(() => {
    // This code is run when your test suite finishes building, but
    // before the FastBoot instance is created.

    // This hook is only ever called once for the entire life cycle
    // of your test process.
  });

};
```

## Visit hooks

The visit hooks will run before and after the `visit` helper generates
a page in FastBoot. These hooks are best for doing per test HTTP mocking in FastBoot.

```js
// config/fastboot-testing-hooks.js

module.exports = function(hooks) {

  hooks.beforeVisit(() => {
    // This code is run right before FastBoot testing visits a URL.

  });

  hooks.afterVisit(() => {
    // And this code is run after FastBoot has generated a visit
    // response

  });

};
```

## Middleware hook

By default FastBoot testing runs a single piece of express middleware that renders the FastBoot response. This may differ from your production environment, which might compose multiple piece of middleware around the call to FastBoot.

For example, your production server may modify an HTTP request before passing it into FastBoot. Or, once FastBoot generates a response your server might modify that response in some way, for example inlining critical CSS.

In order to give your testing environment more control of it's middleware stack there is the middleware hook.

> Note: This hook requires you to call the FastBoot testing middleware, it's passed in as part of the options parameter.

```js
// config/fastboot-testing-hooks.js

module.exports = function(hooks) {

  hooks.middleware(({ app, fastbootTesting }) => {

    app.use((req, res, next) => {
      req.headers['x-i-came-from-fastboot-testing'] = true;
      next();
    });

    app.use(fastbootTesting);
  });

};
```
