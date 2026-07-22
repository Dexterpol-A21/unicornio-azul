import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://unicornioazul.es',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/og/') &&
        !page.includes('/propuestas') &&
        !page.includes('/proposals') &&
        !page.includes('/gracias') &&
        !page.includes('/thank-you'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
  compressHTML: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});