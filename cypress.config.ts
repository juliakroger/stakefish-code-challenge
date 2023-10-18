import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1480,
  viewportHeight: 1260,
  video: false,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  pageLoadTimeout: 60000,
  requestTimeout: 45000,
  responseTimeout: 45000,
  experimentalStudio: true,
  e2e: {
    baseUrl: "https://stakefish-code-challenge.netlify.app",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
