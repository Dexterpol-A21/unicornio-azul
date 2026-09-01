import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://unicornioazul.es',
  redirects: {
    '/cookies': '/privacidad',
    '/en/cookies': '/en/privacy',
    // Old URLs still hit in Google / legacy menus (Luis SEO brief 2026-08-08)
    '/offerings': '/que-hacemos/desarrollo-de-negocios',
    '/about': '/sobre-nosotros',
    '/en/offerings': '/en/what-we-do/business-development',
    '/en/about': '/en/about-us',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return (
          !path.startsWith('/og/') &&
          !path.startsWith('/ideas') &&
          !path.startsWith('/en/ideas') &&
          path !== '/propuestas' &&
          path !== '/en/proposals' &&
          path !== '/gracias' &&
          path !== '/en/thank-you' &&
          path !== '/marketing'
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(root, 'src'),
      },
    },
  },
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
