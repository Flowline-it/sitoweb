import { defineConfig } from 'astro/config';

// BASE_PATH vuoto = sito sul dominio (flowline.it); "/sito" = indirizzo di prova su GitHub Pages.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://flowline.it',
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
