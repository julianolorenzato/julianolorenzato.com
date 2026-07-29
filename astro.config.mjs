// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Roboto",
      cssVariable: "--font-roboto",
      provider: fontProviders.fontsource(),
    },
  ],
  site: "https://julianolorenzato.com",
  integrations: [icon(), sitemap()],
});
