# 🗺️ Sitemap — Unicornio Azul

> Documentación de la estructura de páginas del sitio web.
> Basado en el [BRIEF.md](./BRIEF.md) del cliente + investigación de mercado.

---

## 📊 Estructura General

```
🦄 unicornioazul.es
│
├── 🏠 Home                          /index.html
│
├── 🎯 Qué hacemos                   /que-hacemos
│   │   (Hub — los 4 pilares resumidos)
│   │
│   ├── Desarrollo de Negocios       /que-hacemos/desarrollo-de-negocios
│   ├── Producto y Compras           /que-hacemos/producto-compras-internacionales
│   ├── Marketing Digital            /que-hacemos/marketing-digital
│   └── Canales Digitales            /que-hacemos/canales-digitales-escalado
│
├── ⚙️ Cómo trabajamos               /como-trabajamos
│   (Proceso de 5 pasos)
│
├── 👤 Sobre nosotros                /sobre-nosotros
│   (Equipo / Luis Chicharro)
│
├── 📂 Casos                         /casos
│   (Casos de éxito / proyectos reales)
│
├── ✉️  Contacto                     /contacto
│   (Formulario de proyecto)
│
├── ✅ Gracias                       /gracias
│   (Confirmación post-contacto)
│
├── 📄 Términos y Condiciones        /terminos-y-condiciones
│   (LSSI — aviso legal + condiciones de uso)
│
├── 🔒 Política de Privacidad        /privacidad
│   y Cookies                         (RGPD + cookies unificadas)
│
└── 🔮 404                           /404
    (Página no encontrada)
```

**Total: 14 páginas**

| Tipo | Cantidad | Páginas |
|------|----------|---------|
| Principales (brief) | 9 | Home, Qué hacemos (hub), 4 servicios, Cómo trabajamos, Sobre nosotros, Contacto |
| SEO / Contenido | 1 | Casos |
| UX | 1 | Gracias |
| Legales | 2 | Términos y Condiciones, Privacidad y Cookies |
| Sistema | 1 | 404 |

---

## 📑 Detalle de Páginas

### 1. 🏠 Home — `/`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/index.astro` |
| **Prioridad SEO** | Máxima (1.0) |
| **Meta title** | Unicornio Azul — Soluciones reales para ideas extraordinarias |
| **Meta description** | Agencia 360º de desarrollo de negocios. Construimos marcas propias, producto, compras internacionales y canales digitales para crear negocios reales y escalables. |

**Secciones / bloques:**
- Hero (H1 + H2 + CTA "Cuéntanos tu proyecto")
- Qué hacemos (resumen + texto SEO)
- Diferencial (Antes de vender, hay que construir)
- Autoridad (Mención Cinco Días / El País)
- CTA final (Si tienes una idea, la convertimos en negocio)

**CTAs:** 2 (hero + final)

---

### 2. 🎯 Qué hacemos (Hub) — `/que-hacemos`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/que-hacemos.astro` |
| **Prioridad SEO** | Alta (0.9) |
| **Meta title** | Qué hacemos — Unicornio Azul |
| **Meta description** | Trabajamos por bloques estratégicos que cubren todo el ciclo de creación, lanzamiento y escalado de un negocio. |

**Secciones:**
- Intro SEO
- Resumen de los 4 pilares (cada uno con link a su landing page específica)
- CTA → Contacto

Esta página actúa como **hub** que resume los 4 servicios y deriva tráfico a cada landing page individual.

---

### 2a. Desarrollo de Negocios desde Cero — `/que-hacemos/desarrollo-de-negocios`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/que-hacemos/desarrollo-de-negocios.astro` |
| **Prioridad SEO** | Alta (0.9) |
| **Meta title** | Desarrollo de Negocios desde Cero — Unicornio Azul |
| **Meta description** | Damos forma a ideas desde el inicio. Analizamos el mercado, definimos el producto y estructuramos el modelo de negocio para crear marcas con sentido comercial. |

**Contenido:** Todo el contenido del Pilar 1 del brief + keywords específicas de "desarrollo de negocios", "crear empresa desde cero", "validación de ideas".

---

### 2b. Producto y Compras Internacionales — `/que-hacemos/producto-compras-internacionales`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/que-hacemos/producto-compras-internacionales.astro` |
| **Prioridad SEO** | Alta (0.9) |
| **Meta title** | Producto, Compras e Importación — Unicornio Azul |
| **Meta description** | Desarrollo de producto, sourcing internacional, negociación con fabricantes y control de calidad. Gestionamos toda la cadena de importación y exportación. |

**Contenido:** Todo el Pilar 2 del brief + keywords: "compras internacionales", "sourcing", "importar de China", "desarrollo de producto", "control de calidad fabricantes".

---

### 2c. Marketing y Publicidad Digital — `/que-hacemos/marketing-digital`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/que-hacemos/marketing-digital.astro` |
| **Prioridad SEO** | Alta (0.8) |
| **Meta title** | Marketing y Publicidad Digital — Unicornio Azul |
| **Meta description** | Estrategia digital, SEO, branding aplicado y publicidad online orientados a venta, no a métricas vacías. |

**Contenido:** Todo el Pilar 3 del brief + keywords: "marketing digital para empresas", "publicidad online rentable", "SEO para negocios", "branding aplicado".

---

### 2d. Canales Digitales y Escalado — `/que-hacemos/canales-digitales-escalado`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/que-hacemos/canales-digitales-escalado.astro` |
| **Prioridad SEO** | Alta (0.8) |
| **Meta title** | Canales Digitales y Escalado — Unicornio Azul |
| **Meta description** | Vendemos y escalamos negocios en Amazon, e-commerce y marketplaces internacionales. Estrategia de crecimiento digital multicanal. |

**Contenido:** Todo el Pilar 4 del brief + keywords: "vender en Amazon", "marketplaces internacionales", "e-commerce escalable", "Amazon FBA España", "expansión internacional".

---

### 3. ⚙️ Cómo trabajamos — `/como-trabajamos`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/como-trabajamos.astro` |
| **Prioridad SEO** | Alta (0.8) |
| **Meta title** | Cómo trabajamos — Unicornio Azul |
| **Meta description** | Trabajamos con procesos claros, experiencia real y visión a medio y largo plazo. Descubre nuestro método en 5 pasos. |

**Secciones:**
- Intro (sin humo, sin fórmulas milagro)
- Proceso visual (5 pasos):
  1. Análisis y viabilidad
  2. Definición de producto y estructura
  3. Desarrollo de marca y operaciones
  4. Activación de ventas y marketing
  5. Escalado y optimización
- CTA → Contacto

---

### 4. 👤 Sobre nosotros — `/sobre-nosotros`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/sobre-nosotros.astro` |
| **Prioridad SEO** | Media (0.7) |
| **Meta title** | Sobre nosotros — Unicornio Azul |
| **Meta description** | Unicornio Azul nace de la experiencia real en compras internacionales, desarrollo de producto y marketing digital. Liderado por Luis Chicharro. |

**Secciones:**
- Historia / origen de la agencia
- Perfil de Luis Chicharro
- Mención Cinco Días (prueba social)
- Frase final: "Construimos negocios reales, no promesas"
- CTA → Contacto

---

### 5. 📂 Casos — `/casos`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/casos.astro` |
| **Prioridad SEO** | Alta (0.8) |
| **Meta title** | Casos de éxito — Unicornio Azul |
| **Meta description** | Proyectos reales de desarrollo de negocio, creación de marcas propias y escalado digital. Resultados, no promesas. |

**Contenido:**
- Intro: "No contamos lo que hacemos, mostramos lo que hemos conseguido"
- Grid/listado de casos reales (mínimo 2-3 al inicio, escalable)
- Cada caso: problema → solución → resultado
- CTA → Contacto

> **Nota:** Página clave para conversión. Los competidores que la tienen generan leads más cualificados. "Casos de éxito" es el término estándar en consultoría española.

---

### 6. ✉️ Contacto — `/contacto`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/contacto.astro` |
| **Prioridad SEO** | Alta (0.8) |
| **Meta title** | Contacto — Unicornio Azul |
| **Meta description** | Cuéntanos tu proyecto y analizamos si tiene sentido construirlo juntos. Contacta con Unicornio Azul. |

**Secciones:**
- Texto intro + CTA
- Formulario de contacto:
  - Nombre
  - Email
  - Teléfono (opcional)
  - Mensaje / Descripción del proyecto
  - Checkbox aceptación política de privacidad
  - Botón enviar
- Info de contacto alternativa (email directo)

---

### 7. ✅ Gracias — `/gracias`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/gracias.astro` |
| **Prioridad SEO** | Baja (0.1 — `noindex`) |
| **Meta title** | Gracias por tu mensaje — Unicornio Azul |

**Contenido:**
- Mensaje de confirmación
- "Hemos recibido tu proyecto. Te responderemos en breve."
- Link de vuelta a Home

---

### 8. 📄 Términos y Condiciones — `/terminos-y-condiciones`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/terminos-y-condiciones.astro` |
| **Prioridad SEO** | Baja (0.1 — `noindex`) |
| **Meta title** | Términos y Condiciones — Unicornio Azul |

**Contenido:** Datos fiscales, titularidad del dominio, condiciones de uso del sitio web (LSSI).

---

### 9. 🔒 Política de Privacidad y Cookies — `/privacidad`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/privacidad.astro` |
| **Prioridad SEO** | Baja (0.1 — `noindex`) |
| **Meta title** | Política de Privacidad y Cookies — Unicornio Azul |

**Contenido:** RGPD — tratamiento de datos personales, derechos del usuario, responsable del tratamiento + política de cookies (tipos, finalidad, consentimiento).

---

### 10. 🔮 404 — `/404`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/404.astro` |
| **Prioridad SEO** | Nula (`noindex`) |
| **Meta title** | Página no encontrada — Unicornio Azul |

**Contenido:**
- Mensaje amigable de error
- Ilustración o icono
- Link de vuelta a Home

---

## 🧭 Navegación Propuesta

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo UA]   Qué hacemos ▾   Cómo trabajamos   Casos   [Contacto]  │
└──────────────────────────────────────────────────────────────────┘
                              │
                              └── Desarrollo de Negocios
                              └── Producto y Compras
                              └── Marketing Digital
                              └── Canales Digitales
```

| Elemento | Enlace | Tipo |
|----------|--------|------|
| Logo Unicornio Azul | `/` | Home |
| Qué hacemos (dropdown) | `/que-hacemos` | Nav principal + submenú |
| └ Desarrollo de Negocios | `/que-hacemos/desarrollo-de-negocios` | Submenú |
| └ Producto y Compras | `/que-hacemos/producto-compras-internacionales` | Submenú |
| └ Marketing Digital | `/que-hacemos/marketing-digital` | Submenú |
| └ Canales Digitales | `/que-hacemos/canales-digitales-escalado` | Submenú |
| Cómo trabajamos | `/como-trabajamos` | Nav principal |
| Casos | `/casos` | Nav principal |
| Contacto | `/contacto` | Botón CTA en nav |

### Footer

| Columna | Enlaces |
|---------|---------|
| Servicios | Desarrollo de Negocios · Producto y Compras · Marketing Digital · Canales Digitales |
| Empresa | Home · Cómo trabajamos · Casos · Contacto |
| Legal | Términos y Condiciones · Privacidad y Cookies |
| Contacto | Email · Teléfono (si aplica) |
| Social | LinkedIn (si aplica) |

---

## 📐 Estructura de Archivos (Astro)

```
src/
├── pages/
│   ├── index.astro                              ← Home
│   ├── que-hacemos.astro                        ← Hub servicios
│   ├── que-hacemos/
│   │   ├── desarrollo-de-negocios.astro         ← Pilar 1
│   │   ├── producto-compras-internacionales.astro ← Pilar 2
│   │   ├── marketing-digital.astro              ← Pilar 3
│   │   └── canales-digitales-escalado.astro     ← Pilar 4
│   ├── como-trabajamos.astro                    ← Proceso 5 pasos
│   ├── sobre-nosotros.astro                     ← Equipo / Luis Chicharro
│   ├── casos.astro                              ← Casos de éxito
│   ├── contacto.astro                           ← Formulario
│   ├── gracias.astro                            ← Confirmación post-contacto
│   ├── terminos-y-condiciones.astro             ← LSSI
│   ├── privacidad.astro                         ← RGPD + Cookies
│   └── 404.astro                                ← Página no encontrada
│
├── components/
│   ├── Layout.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── CTA.astro
│   ├── ContactForm.astro
│   ├── ServiceCard.astro
│   └── CaseCard.astro
│
├── styles/
│   └── global.css
│
└── assets/
    └── images/
```

---

## 🔑 Keywords por página (resumen SEO)

| Página | Keywords principales |
|--------|---------------------|
| Home | agencia 360 desarrollo negocio, soluciones reales ideas extraordinarias |
| Desarrollo de Negocios | desarrollo de negocios desde cero, crear empresa, validación de ideas, modelo de negocio |
| Producto y Compras | compras internacionales, sourcing, importar de China, desarrollo de producto, control de calidad |
| Marketing Digital | marketing digital para empresas, publicidad online, SEO, branding aplicado |
| Canales Digitales | vender en Amazon, Amazon FBA España, marketplaces, e-commerce, escalado digital |
| Cómo trabajamos | proceso desarrollo negocio, metodología consultoría |
| Casos | casos de éxito desarrollo negocio, proyectos reales marca propia |
| Contacto | cuéntanos tu proyecto, consultoría desarrollo negocio |

---

## 📝 Notas

- **14 páginas totales**
- **Sitemap validado** con investigación de mercado completa → ver [KEYWORD-RESEARCH.md](./KEYWORD-RESEARCH.md)
- Las páginas legales se marcan con `noindex` para no competir en SEO.
- `404.astro` es manejado nativamente por Astro.
- Las 4 subpáginas de servicio atacan keywords específicas con datos que respaldan su necesidad:
  - **Producto y Compras** → nicho B2B con poca competencia, China es proveedor #1 de España
  - **Canales Digitales** → Amazon España crece al 28%, 47,800 sellers FBA activos
  - **Desarrollo de Negocios** → 13.8% de españoles quiere emprender (GEM 2026)
  - **Marketing Digital** → mercado enorme, diferenciación por enfoque 360º
- **Casos** es la página de mayor conversión después de Home.
- El cambio regulatorio UE 2026 (fin exención aranceles <€150) es oportunidad de contenido si se añade Blog más adelante.
