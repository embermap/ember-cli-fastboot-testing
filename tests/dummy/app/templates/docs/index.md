# Why test FastBoot?

FastBoot applications run on the server inside of a node process that does not support the full DOM specification. The server's minimal DOM implementation is optimized for Ember's view layer, but it's missing APIs often lead to surprising and unexpected bugs.

At the same time, Ember has an amazing suite of testing tools built right into the framework. If an Ember test suite passes it's usually a good sign the application can be deployed.

However, there's a catch. The test suite runs the application in the browser, not FastBoot. On one hand, this makes sense since most of our tests are focused on user behavior and interactions, not initial page renders. On the other hand, we're asking for trouble since we haven't run any tests against FastBoot or it's DOM implementation.

Take this code example. It's a button component that can render with a loading spinner inside of it. When that happens we need to slight adjust the width of the button so that it can fit the spinner.

```js
Component.extend({

  didRender() {
    this._super(...arguments);

    // When the component is rendered with a loading spinner we
    // need to figure out how to adjust the left margin so we can
    // make room for the spinner
    let spinnerWidth = this.$('[data-loading-spinner]').width();
    let offset = spinnerWidth / 2;

    this.set('spinnerOffset', `margin-left: -${offset}px`);
  }  

})
```

We rely on jQuery's width method to preform this calculation. We've got this this code tested in our application and it passing, but when we go to render a page using this component in FastBoot we get a 500 error.

That's because jQuery doesn't work in FastBoot. There's no document API, so this code crashes our application even though our test suite is passing.

Wouldn't it be great if we could run tests against out application's FastBoot rendered output alongside our applications existing tests?

That's exactly what this addon aims to provide.
