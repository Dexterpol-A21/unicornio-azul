# 🦄 Unicornio Azul — SEO Checklist

> Revisión completa del estado de SEO técnico y on-page.
> Última actualización: 13/07/2026

---

## ✅ COMPLETADO

| # | Elemento | Detalle |
|---|----------|---------|
| 1 | **robots.txt** | ✅ Creado en `public/robots.txt`, apunta a sitemap |
| 2 | **`site` URL** | ✅ Configurado en `astro.config.mjs` → `https://unicornioazul.es` |
| 3 | **`@astrojs/sitemap`** | ✅ Instalado, integrado, genera `sitemap-index.xml` auto |
| 4 | **Favicon completo** | ✅ SVG, PNG 96×96, .ico, apple-touch-icon, webmanifest |
| 5 | **Title tags** | ✅ Todas las páginas (ES + EN) |
| 6 | **Meta descriptions** | ✅ Todas las páginas, con keywords SEO |
| 7 | **Open Graph (OG)** | ✅ og:title, description, type, site_name, locale en SEO.astro |
| 8 | **OG images — 4 pilares** | ✅ desarrollo, producto, marketing, escalado (1200×630) |
| 9 | **Twitter Card** | ✅ `summary_large_image` en SEO.astro |
| 10 | **Canonical URL** | ✅ Auto-generado por página en SEO.astro |
| 11 | **`lang="es"`** | ✅ En BaseLayout |
| 12 | **i18n config** | ✅ `defaultLocale: 'es'`, locales `['es', 'en']`, `prefixDefaultLocale: false` |
| 13 | **JSON-LD Service** | ✅ 4 páginas de servicio (ES + EN) con OfferCatalog |
| 14 | **JSON-LD BreadcrumbList** | ✅ 4 páginas de servicio (ES + EN) |
| 15 | **JSON-LD Organization** | ✅ Home (ES) |
| 16 | **Keywords en H1** | ✅ Mantienen keywords del brief en formato visual |
| 17 | **Keywords en body** | ✅ Espolvoreadas naturalmente en intro + qué-incluye |
| 18 | **Keywords en meta descriptions** | ✅ SEO, SEM, Amazon FBA, China, ecommerce B2B, etc. |
| 19 | **Alt / aria en SVGs** | ✅ `aria-hidden="true"` en fondos, `role="img"` + `aria-label` en ilustraciones |
| 20 | **Footer por página** | ✅ Personalizado con tagline coherente |
| 21 | **compression** | ✅ `compressHTML: true` en astro.config |
| 22 | **devToolbar desactivado** | ✅ `devToolbar: { enabled: false }` |

---

## ❌ PENDIENTE — Crítico

| # | Elemento | Archivo(s) | Acción |
|---|----------|-----------|--------|
| **P1** | **`og-default.jpg`** | `src/components/global/SEO.astro` → fallback | SEO.astro referencia `/images/og-default.jpg` como fallback pero el archivo **no existe**. Cada página sin OG image propia (Home, Cómo trabajamos, SORIE, Sobre nosotros, Contacto, Empezar) tendrá **OG roto**. Crear una imagen 1200×630 genérica con logo + slogan. |
| **P2** | **JSON-LD Organization (EN)** | `src/pages/en/index.astro` | Mismo schema que el Home ES pero con URL canónica en inglés. |
| **P3** | **hreflang tags** | `SEO.astro` o `BaseLayout.astro` | Cada página necesita `<link rel="alternate" hreflang="es" href="...">` y `<link rel="alternate" hreflang="en" href="...">` para que Google entienda la relación bilingüe. Sin esto las páginas compiten entre sí. |

---

## 🟡 PENDIENTE — Importante

| # | Elemento | Archivo(s) | Acción |
|---|----------|-----------|--------|
| **P4** | **JSON-LD faltante (ES)** | `como-trabajamos.astro`, `metodologia-sorie.astro`, `sobre-nosotros.astro`, `contacto.astro`, `empezar.astro` | Añadir `WebPage` o `AboutPage` / `ContactPage` schema según corresponda. |
| **P5** | **Meta descriptions largas** | Todas las secundarias | Algunas meta descriptions son muy cortas. Ideal: 140-160 caracteres. Las de las 4 de servicio ya están bien. Revisar: Cómo trabajamos, SORIE, Sobre nosotros, Contacto. |
| **P6** | **`lang="en"` en páginas EN** | `BaseLayout` o páginas EN | Las páginas bajo `/en/` heredan `lang="es"` del BaseLayout actual. Crear un `BaseLayoutEn` o pasar `lang` como prop. |
| **P7** | **robots.txt no bloquea /en/** | `public/robots.txt` | Verificar que las páginas EN se indexan correctamente (actualmente solo bloquea `/og/` y `/gracias`). |

---

## 🟢 PENDIENTE — Deseable

| # | Elemento | Acción |
|---|----------|--------|
| **P8** | **OG image para cada página** | Crear imágenes específicas para Cómo trabajamos, SORIE, Sobre nosotros, Contacto (usar el mismo proceso de Puppeteer con `/og/*.astro`). |
| **P9** | **`loading="lazy"` en imágenes** | Todas las `<img>` que no estén en el viewport inicial deberían tener `loading="lazy"` y `decoding="async"`. |
| **P10** | **WebP / AVIF** | Convertir JPGs grandes (OG images, fotos de Luis) a WebP con fallback JPG en `<picture>`. |
| **P11** | **Cookie consent banner** | Requerido por RGPD si se usan cookies de analytics o terceros. Actualmente no hay banner. |
| **P12** | **Google Analytics / Search Console** | Configurar GA4 + Search Console para el dominio `unicornioazul.es`. Añadir tag en `<head>`. |
| **P13** | **Security headers** | Configurar en el hosting (Cloudflare Pages): `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. |
| **P14** | **`<noscript>` fallback** | Para usuarios sin JS, al menos un mensaje mínimo. |
| **P15** | **Open Graph `image:alt`** | Añadir `og:image:alt` descriptivo para cada imagen. |
| **P16** | **Schema `sameAs` links** | Expandir los `sameAs` en JSON-LD Organization con LinkedIn real, Instagram, etc. cuando existan. |
| **P17** | **404 page** | Verificar que `404.astro` existe y tiene `noindex`. |
| **P18** | **Core Web Vitals** | Auditar con Lighthouse: LCP, INP, CLS. Optimizar fuentes (preload), CSS crítico, evitar layout shifts. |

---

## 📂 Archivos a crear / modificar

```
✅ public/robots.txt                          → CREADO
✅ astro.config.mjs                           → site actualizado a unicornioazul.es
✅ src/pages/index.astro                      → JSON-LD Organization añadido
❌ public/images/og-default.jpg               → CREAR (P1)
❌ src/pages/en/index.astro                   → AÑADIR JSON-LD Organization (P2)
❌ src/components/global/SEO.astro            → AÑADIR hreflang (P3)
❌ src/pages/como-trabajamos.astro            → AÑADIR JSON-LD (P4)
❌ src/pages/metodologia-sorie.astro          → AÑADIR JSON-LD (P4)
❌ src/pages/sobre-nosotros.astro             → AÑADIR JSON-LD (P4)
❌ src/pages/contacto.astro                   → AÑADIR JSON-LD (P4)
❌ src/pages/empezar.astro                    → AÑADIR JSON-LD (P4)
❌ src/layouts/BaseLayout.astro               → SOPORTAR lang prop (P6)
```

---

## 🌐 Sitemap — Páginas actuales

| Ruta | Idioma | OG Image | JSON-LD | 
|------|--------|----------|---------|
| `/` | ES | ❌ (usa default roto) | ✅ Organization |
| `/que-hacemos/desarrollo-de-negocios` | ES | ✅ | ✅ Service + Breadcrumb |
| `/que-hacemos/producto-compras-internacionales` | ES | ✅ | ✅ Service + Breadcrumb |
| `/que-hacemos/marketing-digital` | ES | ✅ | ✅ Service + Breadcrumb |
| `/que-hacemos/canales-digitales-escalado` | ES | ✅ | ✅ Service + Breadcrumb |
| `/como-trabajamos` | ES | ❌ | ❌ |
| `/metodologia-sorie` | ES | ❌ | ❌ |
| `/sobre-nosotros` | ES | ❌ | ❌ |
| `/contacto` | ES | ❌ | ❌ |
| `/empezar` | ES | ❌ | ❌ |
| `/propuestas` | ES | ❌ | ❌ (no-index, interna) |
| `/en/` | EN | ❌ | ❌ |
| `/en/what-we-do/*` (4) | EN | ✅ | ✅ |
| `/en/how-we-work` | EN | ❌ | ❌ |
| `/en/sorie-methodology` | EN | ❌ | ❌ |
| `/en/about-us` | EN | ❌ | ❌ |
| `/en/contact` | EN | ❌ | ❌ |
| `/en/get-started` | EN | ❌ | ❌ |
| `/en/case-studies` | EN | ❌ | ❌ |
| `/en/proposals` | EN | ❌ | ❌ (no-index, interna) |
