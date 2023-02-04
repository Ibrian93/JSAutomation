import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: "https://demoqa.com/books",
    retries: { runMode: 2, openMode: 2 },
  },
});
