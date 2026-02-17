import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexyuui.github.io',
  base: '/celestial-tarot-site',
  integrations: [sitemap()],
});
