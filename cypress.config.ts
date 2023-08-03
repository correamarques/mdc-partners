import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "http://localhost:5173",
    defaultCommandTimeout: 20000,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    requestTimeout: 5000,
    numTestsKeptInMemory: 5,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },
});
