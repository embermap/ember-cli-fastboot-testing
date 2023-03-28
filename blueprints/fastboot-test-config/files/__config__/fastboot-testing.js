module.exports = () => {
  return {
    resilient: false,
    buildSandboxGlobals(defaultGlobals) {
      return {
        ...defaultGlobals
        // here you can add globals to the Fastboot renderer
      };
    },
    setupFastboot(fastbootInstance) {
      // here you can access the fastboot instance which runs the tests
    },
  };
};
