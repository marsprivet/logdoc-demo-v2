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
        target: "http://localhost:9001",
        ws: true,
      },
    },
  },
});
