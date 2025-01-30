import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://productgenie.io",
  integrations: [sitemap()],
});
