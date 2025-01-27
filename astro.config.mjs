import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: "https://askreviews.ai",
  base: "/",
  integrations: [sitemap()],
});
