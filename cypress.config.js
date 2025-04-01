const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.automationpractice.pl/',
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/tests/**/*.spec.js'
  },
});
