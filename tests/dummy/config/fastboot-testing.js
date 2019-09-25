module.exports = {
  resilient: false,
  sandboxGlobals: {
    SampleGlobal: `TestSampleGlobal`
  },
  setupFastboot: fastbootInstance => {
    // the modified SampleGlobal will be available in window.SampleGlobal in model of route
    fastbootInstance._app.sandbox.sandbox.SampleGlobal = 'Modified TestSampleGlobal';
  },
};
