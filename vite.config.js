import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src", // Définit le dossier source
  plugins: [tailwindcss()],
  build: {
    outDir: "../../dist",
    rollupOptions: {
      input: {
        main: "src/pages/index.html",
      },
    },
  },
  server: {
    open: "/pages/index.html", // Ouvre la page principale au démarrage
  },
});
