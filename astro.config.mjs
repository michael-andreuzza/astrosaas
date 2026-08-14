import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://yoursite.com",
  integrations: [sitemap()],
  fonts: [
    {
      name: "Geist",
      cssVariable: "--font-geist",
      provider: fontProviders.fontsource(),
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Noto Serif",
      cssVariable: "--font-noto-serif",
      provider: fontProviders.fontsource(),
      weights: ["100 900"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
  ],
});
