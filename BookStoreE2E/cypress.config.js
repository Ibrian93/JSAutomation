<<<<<<< HEAD:BookStoreE2E/cypress.config.js
module.exports = {
=======
const { defineConfig } = require('cypress')

module.exports = defineConfig({
>>>>>>> da8de033c1f7b93eb0370c298f49e4c95a32040c:Frontend/cypress.config.js
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
<<<<<<< HEAD:BookStoreE2E/cypress.config.js
}
=======
})
>>>>>>> da8de033c1f7b93eb0370c298f49e4c95a32040c:Frontend/cypress.config.js
