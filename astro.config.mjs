import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: 'https://danielamado.com',
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), react(), sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'es',
        en: 'en'
      }
    }
  }), critters()],
  base: "/"
});