# 🦄 Unicornio Azul — SEO Checklist

> Auditoría completa: schema, robots, sitemap, llms, meta, i18n.
> Última actualización: 22/07/2026 (todo crítico/importante implementado)

---

## ✅ COMPLETADO

| # | Elemento | Detalle |
|---|----------|---------|
| 1 | **robots.txt** | Allow `/`; Disallow `/og/`, `/propuestas`, `/en/proposals`, `/gracias`, `/en/thank-you`; Sitemap |
| 2 | **`llms.txt`** | `public/llms.txt` — índice curado ES + EN |
| 3 | **`site` URL** | `https://unicornioazul.es` |
| 4 | **`@astrojs/sitemap`** | Con filter que excluye og/, propuestas, gracias |
| 5 | **Favicon** | Completo |
| 6 | **Title + description** | Todas las páginas (empezar/get-started ampliadas) |
| 7 | **Open Graph + Twitter** | + `og:url` + `og:image:alt` |
| 8 | **OG imágenes** | 4 pilares + casos (logo) + default (logo) |
| 9 | **Canonical** | Auto |
| 10 | **`lang` dinámico** | BaseLayout |
| 11 | **hreflang** | ✅ Usa `getAltLangUrl` + ROUTE_MAP (rutas traducidas reales) |
| 12 | **noindex propuestas** | Prop `noindex` en BaseLayout/SEO |
| 13 | **JSON-LD Organization + WebSite** | Home ES + Home EN |
| 14 | **JSON-LD Service + Breadcrumb** | 4 pilares ES + EN |
| 15 | **JSON-LD CollectionPage** | Casos ES + EN |
| 16 | **JSON-LD HowTo** | Cómo trabajamos ES + EN |
| 17 | **JSON-LD WebPage** | SORIE, Empezar ES + EN |
| 18 | **JSON-LD AboutPage + Person** | Sobre nosotros ES + EN |
| 19 | **JSON-LD ContactPage** | Contacto ES + EN |
| 20 | **compressHTML + fonts preload** | OK |

---

## 🟢 PENDIENTE — deseable / post-launch

| # | Elemento | Acción |
|---|----------|--------|
| D1 | **Páginas legales / UX** | Crear `gracias`, `terminos-y-condiciones`, `privacidad`, `404` |
| D2 | **OG propias** | Cómo trabajamos, SORIE, Sobre nosotros, Contacto |
| D3 | **Cookie consent RGPD** | Si se añaden analytics |
| D4 | **GA4 + Search Console** | Post-dominio |
| D5 | **Security headers** | Cloudflare Pages |
| D6 | **Core Web Vitals** | Lighthouse en producción |
| D7 | **sameAs Instagram** | Cuando exista perfil oficial |
| D8 | **`llms-full.txt`** | Opcional |
| D9 | **lazy loading** | Imágenes de contenido |

---

## 📊 Schema por página (estado actual)

| Página | Schema |
|--------|--------|
| `/` | Organization + WebSite |
| `/en/` | Organization + WebSite |
| 4 pilares ES/EN | Service + Breadcrumb |
| `/casos` + EN | CollectionPage + ItemList + Breadcrumb |
| `/como-trabajamos` + EN | WebPage + HowTo + Breadcrumb |
| `/metodologia-sorie` + EN | WebPage + Breadcrumb |
| `/sobre-nosotros` + EN | AboutPage + Person + Breadcrumb |
| `/contacto` + EN | ContactPage + Breadcrumb |
| `/empezar` + EN | WebPage + Breadcrumb |
| `/propuestas` + EN | noindex |

---

## 🤖 robots.txt

```
User-agent: *
Allow: /
Disallow: /og/
Disallow: /propuestas
Disallow: /en/proposals
Disallow: /gracias
Disallow: /en/thank-you
Sitemap: https://unicornioazul.es/sitemap-index.xml
```

---

## 🧠 llms.txt

Existe en `public/llms.txt` con páginas principales ES + EN + Optional (LinkedIn).
