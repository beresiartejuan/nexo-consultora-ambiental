import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nexo-consultora-ambiental.vercel.app',
  integrations: [sitemap()],
});
