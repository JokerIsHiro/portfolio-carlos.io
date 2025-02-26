// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  vite: {
      plugins: [tailwindcss()],
    },
  output: "server",
  adapter: netlify(),
});