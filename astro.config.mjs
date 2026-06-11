// @ts-check
// pipeline test 2026-06-12
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://waterengineeringinsights.org',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});