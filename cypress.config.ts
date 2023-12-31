import { defineConfig } from "cypress";
import happoTask from "happo-cypress/task";
import eyesPlugin from "@applitools/eyes-cypress";

export default eyesPlugin(
  defineConfig({
    e2e: {
      baseUrl: "http://localhost:5173",
      setupNodeEvents(on, config) {
        happoTask.register(on);
        return config;
      },
    },
  })
);
