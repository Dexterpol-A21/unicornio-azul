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
    '/cookies': { status: 301, destination: '/privacidad' },
    '/en/cookies': { status: 301, destination: '/en/privacy' },
    // Old URLs still hit in Google / legacy menus (Luis SEO brief 2026-08-08)
    '/offerings': { status: 301, destination: '/que-hacemos/desarrollo-de-negocios' },
    '/about': { status: 301, destination: '/sobre-nosotros' },
    '/en/offerings': { status: 301, destination: '/en/what-we-do/business-development' },
    '/en/about': { status: 301, destination: '/en/about-us' },
    // Spanish slugs under /en/ (404s Google keeps crawling)
    '/en/contacto': { status: 301, destination: '/en/contact' },
    '/en/sobre-nosotros': { status: 301, destination: '/en/about-us' },
    '/en/como-trabajamos': { status: 301, destination: '/en/how-we-work' },
    '/en/metodologia-sorie': { status: 301, destination: '/en/sorie-methodology' },
    '/en/casos': { status: 301, destination: '/en/case-studies' },
    '/en/casos/roll-order': { status: 301, destination: '/en/case-studies/roll-order' },
    '/en/casos/bicicleta-electrica': { status: 301, destination: '/en/case-studies/electric-bike' },
    '/en/casos/utrilla': { status: 301, destination: '/en/case-studies/utrilla' },
    '/en/casos/otras-historias': { status: 301, destination: '/en/case-studies/other-stories' },
    '/en/empezar': { status: 301, destination: '/en/get-started' },
    '/en/aviso-legal': { status: 301, destination: '/en/legal-notice' },
    '/en/privacidad': { status: 301, destination: '/en/privacy' },
    '/en/que-hacemos/desarrollo-de-negocios': { status: 301, destination: '/en/what-we-do/business-development' },
    '/en/que-hacemos/producto-compras-internacionales': { status: 301, destination: '/en/what-we-do/product-international-sourcing' },
    '/en/que-hacemos/marketing-digital': { status: 301, destination: '/en/what-we-do/digital-marketing' },
    '/en/que-hacemos/canales-digitales-escalado': { status: 301, destination: '/en/what-we-do/digital-channels-scaling' },
    // Legacy paths without the /en prefix
    '/contact': { status: 301, destination: '/en/contact' },
    '/feed': { status: 301, destination: '/' },
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
