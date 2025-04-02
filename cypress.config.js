const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL;
      config.env.EMAIL = process.env.EMAIL;
      config.env.PASSWORD = process.env.PASSWORD;
      config.env.FIRSTNAME = process.env.FIRSTNAME;
      config.env.LASTNAME = process.env.LASTNAME;
      return config;
    },
    specPattern: 'cypress/tests/**/*.spec.js'
  },
});
