// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://portfoliocarlosastro.netlify.app",
  base: "portfolio/index",
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss()],
      },
});
