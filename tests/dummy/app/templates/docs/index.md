# Why test FastBoot?

FastBoot applications run on the server inside of a node process that does not support the full DOM specification. The server's minimal DOM implementation is optimized for Ember's view layer, but missing APIs often lead to surprising and unexpected bugs.

Ember has an amazing suite of testing tools built into the framework. As Ember developers, we've come to rely on a passing test suite as a sign the application is ready to be deployed.

However, there's a catch. The test suite runs the application in the browser, not FastBoot. On one hand, this makes sense since most of our tests are focused on user behavior and interactions, not initial page renders. On the other hand, we're asking for trouble if we haven't run any tests against FastBoot or its DOM implementation.

Take this code example. It's a button component that renders with a loading spinner inside of it. Whenever this component re-renders itself, we need to slightly adjust the width of the button so that it can fit the spinner.

```js
Component.extend({

  didRender() {
    this._super(...arguments);

    // When the component is rendered with a loading spinner we
    // need to figure out how to adjust the left margin so we can
    // make room for the spinner
    let spinnerWidth = this.element
      .querySelector('[data-loading-spinner]')
      .offsetWidth();
    let offset = spinnerWidth / 2;

    this.set('spinnerOffset', `margin-left: -${offset}px`);
  }  

})
```

This code relies on the `offsetWidth` of an element in our template preform this calculation. We've got this code tested in our application and it's passing, but when we go to render a page using this component in FastBoot we get a 500 error.

That's because there's there's no `document` API in FastBoot, so this code crashes our application even though our test suite is passing.

Wouldn't it be great if we could run our test suite in FastBoot? That way, we know there's no code in our application that's incompatible with FastBoot's DOM API.

Well, that's exactly what this addon aims to do!
