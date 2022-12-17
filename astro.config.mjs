import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
   site: 'https://supremeuikits.com',
  integrations: [tailwind(), image(), compress(), partytown(), sitemap()]
});