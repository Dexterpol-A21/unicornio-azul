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
- **Estado:** Listo. Enlaces a validación de ideas (`/que-hacemos/desarrollo-de-negocios`) y al formulario `/empezar`. Cita de Luis: «Nunca enamorarte de una idea antes de validar el mercado».

#### De la idea al mercado: qué hace falta para lanzar tu propio producto
- **Idiomas:** Español e inglés.
- **URL (ES):** `/ideas/de-la-idea-al-mercado-lanzar-producto/`
- **URL (EN):** `/en/ideas/de-la-idea-al-mercado-lanzar-producto/`
- **Categoría:** Negocios.
- **Imagen:** `public/images/blog-idea-al-mercado.png`
- **Datos reales incorporados:** HBR (Christensen, Cook y Hall): ~30.000 productos de consumo/año, más del 90% fracasa; Nielsen (citado ahí): 3.463 lanzamientos, 71 superaron 50 M$; Amazon.es, comisión de referido 8–15% en la mayoría de categorías.
- **Estado:** Contenido revisado (datos). Enlace al caso [Roll Order](/casos/roll-order/) y al bloque de análisis de oportunidades / modelo de negocio.

#### Cuánto cuesta crear una marca propia (presupuesto real, sin humo)
- **Idiomas:** Español e inglés.
- **URL (ES):** `/ideas/cuanto-cuesta-crear-una-marca-propia/`
- **URL (EN):** `/en/ideas/cuanto-cuesta-crear-una-marca-propia/`
- **Categoría:** Negocios.
- **Imagen:** `public/images/blog-cuesta-crear-marca.png`
- **Datos reales incorporados:** tasas OEPM desde 1 abr 2026 (127,88 € primera clase electrónica, 82,84 € extra); EUIPO 850/50/150 € y plazo de oposición de 3 meses; Amazon.es 8–15%; IVA importación 21%.
- **Estado:** Contenido revisado (datos). Enlaza a definición de modelo de negocio y a `/empezar`.

#### Cómo crear una marca desde cero: naming, identidad y posicionamiento
- **Idiomas:** Español e inglés.
- **URL (ES):** `/ideas/como-crear-una-marca-desde-cero/`
- **URL (EN):** `/en/ideas/como-crear-una-marca-desde-cero/`
- **Categoría:** Negocios.
- **Imagen:** `public/images/blog-crear-marca-cero.png`
- **Gancho:** «No es un logo, es la promesa que haces a tu cliente».
- **Datos reales incorporados:** EUIPO, 3 meses de oposición tras publicar; Nielsen/HBR: parecer distinto no predice el éxito de un lanzamiento.
- **Estado:** Contenido revisado (datos). Enlaza a creación de marca y a la metodología SORIE™.

#### Plan de negocio para un producto físico: qué debe incluir
- **Idiomas:** Español e inglés.
- **URL (ES):** `/ideas/plan-de-negocio-producto-fisico/`
- **URL (EN):** `/en/ideas/plan-de-negocio-producto-fisico/`
- **Categoría:** Negocios.
- **Imagen:** `public/images/blog-plan-negocio-producto.png`
- **Datos reales incorporados:** EY (>$230.000 M en circulante industrial; CCC >60 días vs 25–30); HBR Christensen más del 90% (no 95%); Amazon.es 8–15%; IVA importación 21%.
- **Estado:** Contenido revisado (datos). Enlaza a análisis de oportunidades, Roll Order y al artículo de lanzamiento.

#### Implantarse en Venezuela: oportunidades, riesgos y pasos
- **Idiomas:** Español e inglés.
- **URL (ES):** `/ideas/implantarse-en-venezuela/`
- **URL (EN):** `/en/ideas/implantarse-en-venezuela/`
- **Categoría:** Negocios.
- **Imágenes:** ilustración `public/images/blog-implantarse-venezuela.png` (hero) + foto `public/images/venezuela.png` (cuerpo).
- **Estado:** Listo.

Fechas de publicación (una por artículo, misma fecha en ES y EN): 28 ago validar, 1 sep idea al mercado, 4 sep coste de marca, 8 sep marca desde cero, 12 sep plan de negocio, 16 sep Venezuela.

**Disclaimer** (ES/EN) al pie de los seis artículos, en cursiva, igual que Venezuela: texto informativo, no es asesoramiento jurídico/fiscal/financiero ni garantía de viabilidad.

**Contenido aprobado tal cual:** Validar e Implantarse en Venezuela. El resto se reescribió con datos comprobables (HBR/Nielsen, OEPM 2026, EUIPO, Amazon.es, IVA 21%, EY). Se retiraron cifras que no se sostenían (Shopify, ATTN, NAM 67%, OEPM 125,36 €, “95%” de Christensen).

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
- Fechas de artículo en UTC para que no salte el día según la zona horaria.

### Navegación
- Ideas en el menú Nosotros (desktop, 3 columnas) y en el panel móvil (rejilla 2×2).
- Enlace a Ideas también en el footer.
- Cambio ES/EN respeta `/ideas` y `/en/ideas`.

### Layout del artículo y responsive
- Tabla de contenidos fija a la izquierda solo en escritorio ancho (≥1280px); en móvil y tablet no ocupa sitio.
- "Sigue leyendo": carrusel horizontal en móvil; rejilla de tarjetas desde tablet.
- Flechas de Volver / Ver más con hover (color + desplazamiento).
- Imágenes del cuerpo a ancho completo, redondeadas.
- Hub Ideas: destacado apilado (cover 16:9 + texto debajo) para que no quede franja vacía; zoom extra solo en la cover de Validar (formato 3:2).
- Padding del post con safe-area en móvil.
- Autor al final del artículo.
- Corregido el salto de línea de la tabla de contenidos al seleccionar.

### Imágenes de artículos
- Cover PNG propia por artículo (no SVG, no repetidas).
- Venezuela: ilustración de hero + foto real en el cuerpo.
- Validar: se mantiene la cover original.

### Otras historias — vehículos
- El carrusel infinito de vehículos ya no se detiene al tocar una imagen en móvil.
- Galería a pantalla completa al hacer clic o toque en cualquier imagen de vehículos (la principal y las del carrusel).
- Navegación con flechas, contador `1 / 10`, teclado (Esc, ←, →) y swipe en móvil.
- Aplicado en español (`/casos/otras-historias/`) e inglés (`/en/case-studies/other-stories/`).
