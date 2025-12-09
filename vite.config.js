import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  // Proxy API requests to the backend server to avoid CORS issues during development
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  plugins: [react(), tailwindcss(), flowbiteReact()],
});
