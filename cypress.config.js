//const { defineConfig } = require("cypress");

//module.exports = defineConfig({
  //e2e: {
    //setupNodeEvents(on, config) {
      // implement node event listeners here
    //},
  //},
//}); 

const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    //projectId: "w3q94j",
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/cucumber/feature/*.feature"
  },
});
