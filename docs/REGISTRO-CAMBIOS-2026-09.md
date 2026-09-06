# Registro de cambios — Septiembre 2026

> Registro mensual del trabajo en Unicornio Azul y Utrilla Contract.
> Cada entrada marca qué se hizo, cuándo y en qué estado quedó.

---

## Estado general

- Sitios en Astro + Tailwind, desplegados en Cloudflare.
- Sección de artículos (Ideas) creada y en funcionamiento.

---

## Artículos — Ideas (Unicornio Azul)

### Publicados

#### Cómo validar una idea de negocio antes de invertir
- **Idiomas:** Español e inglés.
- **URL (ES):** `/ideas/como-validar-una-idea-de-negocio-antes-de-invertir/`
- **URL (EN):** `/en/ideas/como-validar-una-idea-de-negocio-antes-de-invertir/`
- **Categoría:** Negocios.
- **Imagen:** `public/images/blog-validar-idea-negocio.png` (generada para este artículo).
- **Dato real incorporado:** CB Insights, 42% de startups fracasa por falta de necesidad real de mercado.
- **Estado:** Listo.

#### De la idea al mercado: qué hace falta para lanzar tu propio producto
- **Idiomas:** Español e inglés.
- **URL (ES):** `/ideas/de-la-idea-al-mercado-lanzar-producto/`
- **URL (EN):** `/en/ideas/de-la-idea-al-mercado-lanzar-producto/`
- **Categoría:** Negocios.
- **Imagen:** `public/images/og-roll-order.jpg` (caso Roll Order).
- **Datos reales incorporados:** Clayton Christensen (30.000 productos/año, 95% fracasa), Shopify/Zero100 (95% de lanzamientos no cumple ingresos, 85% equipos desalineados), ATTN Agency (4 semanas de cuenta atrás → 34% más conversión el primer día).
- **Estado:** Listo.

### Sistema de artículos

- Content Collections de Astro con esquema propio (título, descripción, idioma, slug, fecha, categoría, imagen, tags, destacado, borrador).
- Página índice `/ideas/` y `/en/ideas/` con listado y destacado.
- Página de detalle `/ideas/[slug]/` y `/en/ideas/[slug]/`.
- Componente de artículo con tabla de contenidos fija (scroll-spy), artículos relacionados y CTA de contacto.
- Autor al final del artículo (Por Luis Chicharro / By Luis Chicharro).

### SEO de artículos

- `og:type` = article, `article:published_time`, `article:modified_time`, `article:section`.
- JSON-LD `BlogPosting` con keywords (tags), autor y publisher.
- JSON-LD `BreadcrumbList` (Inicio → Ideas → Artículo).
- `canonical` y `hreflang` ES/EN por artículo.

---

## Correcciones y mejoras

### SEO global
- Un solo `H1` por página en todo el sitio (antes la home tenía 3).

### Layout del artículo
- Tabla de contenidos fija a la izquierda del artículo, con resaltado de sección activa.
- "Sigue leyendo" alineado con la tabla de contenidos.
- Autor movido a la parte inferior del artículo.
- Corregido el salto de línea de la tabla de contenidos al seleccionar.

### Otras historias — vehículos
- El carrusel infinito de vehículos ya no se detiene al tocar una imagen en móvil.
- Galería a pantalla completa al hacer clic o toque en cualquier imagen de vehículos (la principal y las del carrusel).
- Navegación con flechas, contador `1 / 10`, teclado (Esc, ←, →) y swipe en móvil.
- Aplicado en español (`/casos/otras-historias/`) e inglés (`/en/case-studies/other-stories/`).
