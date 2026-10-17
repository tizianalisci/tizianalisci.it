// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tizianalisci.it',
  // Subfolder when published at username.github.io/tizianalisci.it/ (set by the deploy workflow). Empty on the real domain.
  base: process.env.ASTRO_BASE || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'it', locales: { it: 'it-IT', en: 'en-GB' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
