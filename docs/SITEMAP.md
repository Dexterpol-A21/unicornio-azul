# 🗺️ Sitemap — Unicornio Azul

> Documentación de la estructura de páginas del sitio web.
> Basado en el [BRIEF.md](./BRIEF.md) del cliente.

---

## 📊 Estructura General

```
🦄 unicornioazul.es
│
├── 🏠 Home                          /index.html
│
├── 🎯 Qué hacemos                   /que-hacemos
│   (Servicios / 4 pilares)
│
├── ⚙️ Cómo trabajamos               /como-trabajamos
│   (Proceso de 5 pasos)
│
├── 👤 Sobre nosotros                /sobre-nosotros
│   (Equipo / Luis Chicharro)
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

### 2. 🎯 Qué hacemos — `/que-hacemos`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/que-hacemos.astro` |
| **Prioridad SEO** | Alta (0.9) |
| **Meta title** | Qué hacemos — Unicornio Azul |
| **Meta description** | Trabajamos por bloques estratégicos que cubren todo el ciclo de creación, lanzamiento y escalado de un negocio. |

**Secciones:**
- Intro SEO
- Pilar 1 — Desarrollo de Negocios desde Cero
- Pilar 2 — Producto, Compras e Internacionalización
- Pilar 3 — Marketing y Publicidad Digital
- Pilar 4 — Canales Digitales y Escalado
- CTA → Contacto

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

### 5. ✉️ Contacto — `/contacto`

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

### 6. ✅ Gracias — `/gracias`

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

### 7. 📄 Términos y Condiciones — `/terminos-y-condiciones`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/terminos-y-condiciones.astro` |
| **Prioridad SEO** | Baja (0.1 — `noindex`) |
| **Meta title** | Términos y Condiciones — Unicornio Azul |

**Contenido:** Datos fiscales, titularidad del dominio, condiciones de uso del sitio web (LSSI).

---

### 8. 🔒 Política de Privacidad y Cookies — `/privacidad`

| Campo | Valor |
|-------|-------|
| **Archivo** | `src/pages/privacidad.astro` |
| **Prioridad SEO** | Baja (0.1 — `noindex`) |
| **Meta title** | Política de Privacidad y Cookies — Unicornio Azul |

**Contenido:** RGPD — tratamiento de datos personales, derechos del usuario, responsable del tratamiento + política de cookies (tipos, finalidad, consentimiento).

---

### 9. 🔮 404 — `/404`

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
┌─────────────────────────────────────────────────────────┐
│  [Logo UA]   Qué hacemos   Cómo trabajamos   Sobre Nosotros   [Contacto]  │
└─────────────────────────────────────────────────────────┘
```

| Elemento | Enlace | Tipo |
|----------|--------|------|
| Logo Unicornio Azul | `/` | Home |
| Qué hacemos | `/que-hacemos` | Nav principal |
| Cómo trabajamos | `/como-trabajamos` | Nav principal |
| Sobre nosotros | `/sobre-nosotros` | Nav principal |
| Contacto | `/contacto` | Botón CTA en nav |

### Footer

| Columna | Enlaces |
|---------|---------|
| Navegación | Home · Qué hacemos · Cómo trabajamos · Sobre nosotros · Contacto |
| Legal | Términos y Condiciones · Privacidad y Cookies |
| Contacto | Email · Teléfono (si aplica) |
| Social | LinkedIn (si aplica) |

---

## 📐 Estructura de Archivos (Astro)

```
src/
├── pages/
│   ├── index.astro              ← Home
│   ├── que-hacemos.astro        ← Servicios / 4 pilares
│   ├── como-trabajamos.astro    ← Proceso 5 pasos
│   ├── sobre-nosotros.astro     ← Equipo / Luis Chicharro
│   ├── contacto.astro           ← Formulario
│   ├── gracias.astro                 ← Confirmación post-contacto
│   ├── terminos-y-condiciones.astro  ← LSSI
│   ├── privacidad.astro              ← RGPD + Cookies
│   └── 404.astro                     ← Página no encontrada
│
├── components/
│   ├── Layout.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── CTA.astro
│   ├── ContactForm.astro
│   └── ...
│
├── styles/
│   └── global.css
│
└── assets/
    └── ...
```

---

## 📝 Notas

- Las páginas legales (`terminos-y-condiciones`, `privacidad`) son obligatorias para operar en España y la UE. Se marcan con `noindex` para no competir en SEO. Privacidad y Cookies se unifican en una sola página.
- La página de `gracias` es opcional pero recomendada para buena UX post-formulario.
- `404.astro` es manejado nativamente por Astro: basta con crear `src/pages/404.astro`.
- Las 5 páginas del brief del cliente son las de prioridad SEO alta. El resto son páginas de soporte.
