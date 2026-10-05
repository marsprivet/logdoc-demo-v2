import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@ds": fileURLToPath(new URL("./src/ds", import.meta.url)) },
  },
  server: {
    proxy: {
      "/api": {
        // LOGDOC_API points the dev server at another backend, e.g. the
        // upstream build on :9101 that runs without auth.
        target: process.env.LOGDOC_API ?? "http://localhost:9001",
        ws: true,
      },
    },
  },
});
