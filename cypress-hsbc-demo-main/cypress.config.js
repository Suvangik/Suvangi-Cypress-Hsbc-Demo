const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseurl: "https://www.hsbc.co.in/",
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    },
});
