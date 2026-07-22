# Plan de rework — Página de proyectos (ex Casos)

> Fecha: 2026-07-21  
> Fuente de contenido: `docs/INFO-CLIENTE-NUEVA.md`  
> Estado actual: `/casos` y `/en/case-studies` usan historias inventadas (métricas 3×, +240%, 500K). Hay que tirarlas y reconstruir con casos reales.

---

## 1. Decisión de arquitectura

### Qué hacemos
- **1 página canónica** de proyectos (rework total).
- **1 teaser en el index** (3 cards o strip → link a la página).
- **No** crear 2 páginas nuevas.
- **No** página solo de música/IA.
- **No** página solo de inteligencia aduanera.

### Nombre — DECISIÓN FINAL
| Locale | Nombre | Ruta |
|---|---|---|
| ES | **Casos** (se mantiene) | `/casos` |
| EN | **Cases** | `/en/case-studies` |

No se renombra a Proyectos. No se cambia el slug.

---

## 2. Contenido de la página (estructura)

### Hero
- H1: **Proyectos** (o “Proyectos reales”).
- Sub: una línea tipo *Ideas que llegaron a fábrica, a Amazon y al mercado.*
- Sin métricas inventadas. Sin decoración pesada (mantener el espíritu limpio del diseño actual o rediseñar si hace falta).

### Bloque principal — 3 proyectos reales

#### Proyecto 01 — Roll Order
- **Nombre:** público (web + LinkedIn).
- **Pilares:** Desarrollo de negocio + Producto / compras + Escalado (Amazon).
- **Historia:** llegó con patente → desarrollo de producto → industrialización → fabricación → packaging → logística e importación → lanzamiento Amazon → promoción.
- **Enlaces:** https://roll-order.com/ + post LinkedIn.
- **Formato sugerido:** Problema → Qué hicimos → Resultado (+ link externo).

#### Proyecto 02 — Bicicleta eléctrica (anónimo)
- **Nombre de empresa:** no publicar (cliente no lo dio).
- **Pilares:** Producto / compras + SORIE™.
- **Historia:** estaciones de carga/alquiler en ayuntamientos; problemas de robo (asientos, cestas), pata que se partía; lista de “bicicleta perfecta”; SORIE; competencia; ferias; viaje con CEO a fábrica; aranceles 10% → 70% salvados.
- **Formato:** Problema → Qué hicimos (SORIE) → Resultado cualitativo (producto desarrollado, obstáculo arancelario resuelto). Sin inventar % de ventas.

#### Proyecto 03 — Smart Watch Pádel (Padelgest / Hit X)
- **Nombre:** usable vía nota de prensa pública.
- **Pilares:** Producto / industrialización + logística e importación.
- **Historia:** soporte a empresas de inventos/prototipos; industrialización, logística, importación; presentación en feria de pádel (Barcelona); lanzamiento global en breve.
- **Enlace:** https://comunicae.es/notas-de-prensa/padelgest-revoluciona-el-padel-con-hit-x-el

### Bloque secundario — “También hacemos…” (capacidades, no casos)
Ver sección 4. Corto, sin nombres de artistas, sin PDF.

### CTA final
- Mismo patrón que index / otras landings.
- Copy: conversación / empezar.
- Link: `/empezar` · EN `/en/get-started`.

### Footer
- Estándar del sitio.

---

## 3. Teaser en el index

- Nueva sección **después de pilares o antes del CTA final** (decidir en diseño).
- 3 cards mínimas (título corto + 1 línea + link a `/proyectos#…` o a la página).
- CTA de sección: “Ver proyectos →”.
- ES + EN.

No meter el bloque “También hacemos…” completo en el index (demasiado ruido).

---

## 4. Qué hacer con lo que NO es caso

### 4.1 Cinco Días — Autoridad / prensa

**No va en Proyectos.**

| Dónde | Acción |
|---|---|
| `/` filosofía-autoridad | Ya linkeado — mantener / reforzar si hace falta |
| `/como-trabajamos` | Ya mencionado — mantener |
| `/sobre-nosotros` | Opcional: línea “Destacado en Cinco Días (El País)” con link |
| `/proyectos` | **No** |

**Conclusión:** no es caso; es prueba social. No crear sección nueva solo por esto. Un link bien colocado basta.

---

### 4.2 Música / embajadores digitales / agentes IA — Capacidad nueva

**No va como caso con nombre.** Luis: *no me gustaría publicar el nombre del artista.*

| Opción | ¿Hacerla? | Notas |
|---|---|---|
| A. Bloque “También hacemos…” en `/proyectos` | **Sí (recomendado)** | 3–4 líneas: música para empresas, cantantes virtuales, marketing musical, embajadores digitales, agentes IA. Sin nombres, sin métricas de YouTube del artista. |
| B. Página propia `/musica` o `/servicios-digitales` | **No ahora** | Poco contenido, diluye el core (producto físico / Amazon / import). |
| C. Nuevo pilar en “Qué hacemos” | **No ahora** | Rompe la arquitectura de 4 pilares. Revisar solo si el cliente lo pide como línea de negocio principal. |
| D. Ignorar del todo | No | El cliente lo envió a propósito; merece un hueco mínimo. |

**Copy guía (ES, borrador):**  
*Además del producto físico, apoyamos proyectos de marketing musical, creación de embajadores digitales e integración de agentes de IA. Si tienes una campaña o una marca que necesita esa capa, háblanos.*

**EN:** equivalente. Sin Noel Santana, Ocean Brise, jingles PR ni 2.7M impresiones (eso es prueba interna, no pública).

---

### 4.3 PDF aduanas (`INFORME-BICIS 2.pdf`) — Inteligencia comercial

**No es un caso publicable.** Es un informe de método (54 países, Lime/Neutron como *ejemplo* de inteligencia, no como cliente de Unicornio Azul). Publicar capturas o “trabajamos con Lime” sería incorrecto y arriesgado.

| Opción | ¿Hacerla? | Notas |
|---|---|---|
| A. Página o sección “Inteligencia aduanera” | **No** | Demasiado técnico, parece brochure B2B viejo, no encaja con el tono del sitio. |
| B. Mencionar en copy de Producto / SORIE / Bici | **Sí, ligero** | En el proyecto bici o en `/que-hacemos/producto…`: *análisis de competencia e inteligencia de mercado/aduanas* — una frase, sin PDF ni tablas. |
| C. Adjuntar PDF al sitio | **No** | Branding Cevi, datos ajenos, no es asset de marca Unicornio Azul. |
| D. Ignorar del todo en la web | Aceptable | Queda en `docs/` como referencia interna del equipo. |

**Conclusión recomendada:**  
**No lo publicamos como pieza.** Como máximo, una mención cualitativa dentro del proyecto de la bicicleta (*“análisis estratégico de competencia e inteligencia de mercado”*). El PDF se queda en docs, no en producción.

---

## 5. Resumen ejecutivo — sí / no

| Pieza | ¿En Proyectos? | ¿En Index? | ¿Página nueva? | Notas |
|---|---|---|---|---|
| Roll Order | Sí (caso 01) | Teaser | No | Público |
| Bici eléctrica | Sí (caso 02, anónimo) | Teaser | No | Sin nombre empresa |
| Smart Watch Pádel | Sí (caso 03) | Teaser | No | Link prensa |
| Cinco Días | No | Solo si ya está / autoridad | No | Prensa |
| Música / IA | Bloque “También…” | No | No | Sin nombres |
| PDF aduanas | No (o 1 frase en bici) | No | No | Solo docs internos |

---

## 6. Orden de implementación

1. Confirmar nombre final: **Proyectos** (+ ¿cambiar slug `/casos` → `/proyectos`?).
2. Rework total `casos.astro` → contenido real (y `en/case-studies.astro`).
3. Bloque corto “También hacemos…” (música/IA).
4. Actualizar nav, footer, `ui.ts`, rutas EN/ES.
5. Teaser en `index.astro` + `en/index.astro`.
6. Redirect 301 si se cambia el slug.
7. QA: links externos, anonimato bici, cero métricas inventadas.

---

## 7. Criterios de calidad (no negociables)

- Cero métricas inventadas (3×, +240%, 500K, etc.).
- No publicar nombre del artista musical.
- No publicar nombre de la empresa de bicis si el cliente no lo autoriza.
- No presentar el PDF / Lime / Neutron como “nuestro caso”.
- Mantener ES + EN alineados.
- Diseño coherente con el sistema visual del sitio (sin repetir layouts de otras landings si se busca identidad propia — el rework de diseño puede ser radical, el contenido no).

---

## 8. Pendiente de decisión del equipo

- [ ] ¿Renombrar a **Proyectos** en UI?
- [ ] ¿Cambiar ruta `/casos` → `/proyectos` (y EN equivalente)?
- [ ] ¿Incluir bloque “También hacemos…” en la misma página o omitirlo en v1?
- [ ] ¿Teaser en index en el mismo PR o en un segundo paso?
