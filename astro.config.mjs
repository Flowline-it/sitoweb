import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://flowline.it',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
