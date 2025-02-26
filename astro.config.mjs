// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://velvety-wisp-987bde.netlify.app",
  base: "portfolio/src/pages",
  integrations: [mdx()],

  vite: {
      plugins: [tailwindcss()],
    },

  adapter: netlify(),
});