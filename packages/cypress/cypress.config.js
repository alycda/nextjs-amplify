/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: '**/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support/e2e.{js,jsx,ts,tsx}',
  },
});
