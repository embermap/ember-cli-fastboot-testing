module.exports = {
  resilient: false,
  sandboxGlobals: {
    SampleGlobal: `TestSampleGlobal`
  },
  useEnvironment: 'specified-by-user',
  setupFastboot: fastbootInstance => {
    // the modified SampleGlobal will be available in window.SampleGlobal in model of route
    fastbootInstance._app.sandbox.sandbox.SampleGlobal = 'Modified TestSampleGlobal';
  },
};
