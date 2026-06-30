# 🦄 Unicornio Azul

> **"Soluciones reales para ideas extraordinarias"**
> Agencia 360º de desarrollo de negocios — Consultoría, producto, compras internacionales y canales digitales.
> **Cliente de NO PROB SYSTEMS** — Stack: Astro + Tailwind v4 + TypeScript

---

## 📊 ESTADO DEL PROYECTO

### 🗂️ Documentación del cliente

| Doc | Estado | Descripción |
|-----|--------|-------------|
| [BRIEF.md](docs/BRIEF.md) | ✅ Completo | Brief: páginas, textos, SEO, keywords, tono |
| [DESIGN.md](docs/DESIGN.md) | ✅ Completo | Paleta navy+gold, tipografía, componentes, layouts |

### 📐 Guías de NO PROB (genéricas, en `../workflow/`)

| Guía | Para |
|------|------|
| [`workflow/00-proyecto-nuevo.md`](../workflow/00-proyecto-nuevo.md) | Iniciar cualquier proyecto desde cero |
| [`workflow/01-diseno.md`](../workflow/01-diseno.md) | Construir sistema de diseño |
| [`workflow/02-dev-patterns.md`](../workflow/02-dev-patterns.md) | Convenciones y patrones de código |

### ⚠️ Pendiente del cliente

- [ ] Logo en SVG
- [ ] Imágenes de diseño (`unicornio-azul-NAVY-2/`)
- [ ] Logos de prensa (Cinco Días, El País)
- [ ] Foto de Luis Chicharro

### 💻 Desarrollo

| Tarea | Estado |
|-------|--------|
| Crear proyecto Astro | ⬜ Pendiente |
| Configurar Tailwind + colores | ⬜ Pendiente |
| BaseLayout + Header + Footer | ⬜ Pendiente |
| Home completa | ⬜ Pendiente |
| Páginas internas | ⬜ Pendiente |
| SEO + metadatos | ⬜ Pendiente |
| Deploy | ⬜ Pendiente |

---

## 🏗️ Stack

- **Astro** v5/6 — Static output
- **Tailwind CSS** v4 (`@tailwindcss/vite`)
- **TypeScript** strict
- **GSAP** + **Lenis** — Animaciones
- **Lucide Icons** — Iconografía
- **Cloudflare Pages** — Hosting

---

## 📄 Páginas

| Ruta | Título |
|------|--------|
| `/` | Home |
| `/que-hacemos` | Qué hacemos (4 pilares) |
| `/como-trabajamos` | Cómo trabajamos (5 pasos) |
| `/sobre-nosotros` | Sobre nosotros (Luis Chicharro) |
| `/contacto` | Contacto |

---

## 🎨 Diseño

- **Tema**: Navy oscuro (`#060B1A`) + dorado (`#C9A84C`)
- **Tipografía**: Playfair Display (headings) + Inter (body)
- **Concepto**: "El unicornio que buscan pero no encuentran"

---

## 📁 Estructura

```
unicornioazul/
├── docs/
│   ├── BRIEF.md              ← Brief del cliente
│   └── DESIGN.md              ← Sistema de diseño UA
├── design/
│   └── unicornio-azul-NAVY-2/    ← Assets del cliente (vacío)
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   └── utils/
├── astro.config.mjs
└── package.json
```
