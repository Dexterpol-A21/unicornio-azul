# Registro de cambios — Octubre 2026

> Registro mensual del trabajo en Unicornio Azul y Utrilla Contract.

---

## Portada — rendimiento, SEO y accesibilidad (1 nov 2026)

PageSpeed de https://unicornioazul.es/ (escritorio, 1 nov): rendimiento 80, accesibilidad 96, SEO 92, buenas prácticas 100. Publicado en `main` (`6e09437`).

### Hecho

- **SEO:** `Agentmap` sale de `robots.txt`. Lighthouse lo marca como directiva desconocida. El catálogo sigue en `<link rel="ai-catalog">` y en las cabeceras.
- **Imágenes:** menú y logo pasaban de unos 3,8 MB (PNG de más de 1000 px) a WebP de unos 50 KB en `public/images/opt/`. El logo lleva `srcset` y ancho y alto.
- **LCP:** el titular se pinta al cargar, sin esperar la animación. La sección de oportunidad ya no espera al JavaScript para verse.
- **Fuentes:** Satoshi y Space Grotesk siguen en todas las páginas. Cabinet Grotesk, Switzer y Google Fonts solo cargan en propuestas y en el estudio interno.
- **Contraste:** etiquetas, redes y copyright del pie, y «Opportunity» / «Construir», cumplen AA.
- **Caché:** fuentes, imágenes y `/_astro/` un año.
- **Medido** en local y en producción, escritorio y móvil: rendimiento, accesibilidad, SEO y buenas prácticas en 100. LCP de escritorio de 3,7 s a 0,3 s en local. Peso de 4.105 KB a 309 KB.

### No hecho (a propósito)

- Quitar las chispas del titular. No bajaban la nota.
- Las fotos grandes de las páginas de casos siguen en PNG. La portada ya no las descarga.

---

## Enlaces internos y formulario en producción (28 oct 2026)

Publicado en `main` (`2dce9b9`). La clave de Resend del dominio se puso ese día en Cloudflare, sin commit.

### Hecho

- **Enlaces dentro del texto**, en español e inglés: home, servicios, cómo trabajamos, sobre nosotros, las landings de creación y el cierre de los artículos. «modelo de negocio» va al artículo del plan, no a una URL nueva.
- **Teléfono:** un número normal ya no tira el formulario. Antes fallaba y no llegaba a Resend.
- **Avisos:** el formulario distingue email mal, servidor sin clave y fallo de envío.
- **Clave en el proyecto que publica** `unicornioazul.es`. Una prueba llegó a `luis.chicharro@unicornioazul.es`.

### No hecho (a propósito)

- El artículo de Venezuela no enlaza de vuelta.
- No se subieron facturas ni planes.

---

## Creación de negocios — landing y páginas de búsqueda (20 oct 2026)

Servicio de creación de negocios, solo este. Publicado en `main` (`6402ff9`). Lista de keywords en `docs/KEYWORDS-CREACION.md`.

### Hecho

- **Landing:** `/creacion-de-negocios/` y `/en/business-creation/`. En el texto: emprender desde cero, montar un negocio, modelo de negocio, crear una marca propia, lanzar un producto.
- **Páginas del mismo servicio:** montar un negocio, crear una empresa en España, marca propia, validar una idea. Cada una en español e inglés.
- **Ciudades:** solo Madrid, Barcelona y Valencia. Son las únicas donde Google sugiere «crear empresa en {ciudad}». Barcelona y Valencia dicen que el trabajo se hace desde Madrid.
- **Enlaces:** desde desarrollo de negocios, el pie y el menú de idioma.
- **Ideas:** el hub y los artículos vuelven a indexarse y entran en el sitemap. Siguen fuera propuestas, marketing, gracias y og.

### No hecho (a propósito)

- Más ciudades. En Soria, Teruel, Lugo, Logroño y el resto probado no hay búsqueda.
- Página nueva de «modelo de negocio». Es la keyword con más interés (61 en Trends, España, último año) y todavía no tiene URL.
- «negocio rentable» y «negocio online»: en Trends salen a 0.

---

## Formulario Empezar — Resend (19 oct 2026)

`/empezar` y `/en/get-started` dejan Web3Forms. `functions/api/lead.js` manda dos correos con Resend.

### Hecho

- **Aviso del lead:** `luis.chicharro@unicornioazul.es`. Responder ese correo escribe a quien envió el formulario.
- **Confirmación:** al email de quien lo rellena, en su idioma. Dice «Te escribiremos en menos de 48 horas». Lleva el icono del sitio.
- **Remitente:** `Unicornio Azul <notificaciones@unicornioazul.es>`.
- **Dominio:** `unicornioazul.es` verificado en Resend, región `eu-west-1`, sin seguimiento de aperturas ni clics.
- **Clave:** en local, `.dev.vars`. En el proyecto que publica el dominio, el 28 oct. No va en el repositorio.
- **Privacidad:** el texto nombra a Resend como encargado del envío.

---

## Agent discovery — API, MCP, skills (14 oct 2026)

Auditoría isitagentready: bloque **API, Auth, MCP & Skill Discovery 0/8**. Se publica lo que el sitio puede cumplir de verdad. **No** hay OAuth/OIDC: no hay login ni API protegida; no se inventan `authorization_endpoint` ni `jwks_uri`.

### Hecho

- **API pública de solo lectura:** `/api/v1/health`, `/firm`, `/services`, `/cases` + OpenAPI en `/api/v1/openapi.json`.
- **API Catalog (RFC 9727):** `/.well-known/api-catalog` (`application/linkset+json`) con `service-desc`, `service-doc` (llms.txt) y `status`.
- **MCP real:** `functions/mcp.js` en `/mcp` (JSON-RPC: `list_services`, `list_cases`, `get_contact`). Card en `/.well-known/mcp/server-card.json` y `/.well-known/mcp.json`.
- **Agent Skills:** `/.well-known/agent-skills/index.json` + `unicornio-azul/SKILL.md` (digest SHA-256 en el build).
- **WebMCP:** `src/components/global/WebMcp.astro` registra las mismas acciones en el navegador.
- **ARD:** `/.well-known/ai-catalog.json` y `<link rel="ai-catalog">` en el head. `Agentmap` estuvo en `robots.txt` hasta el 1 nov: Lighthouse lo rechaza.
- **auth.md:** `/auth.md` deja claro que no hay registro OAuth de agentes; el contacto es `/empezar` o email.

### No hecho (a propósito)

- `/.well-known/openid-configuration`
- `/.well-known/oauth-authorization-server`
- `/.well-known/oauth-protected-resource`

Esos checks seguirán en 404 hasta que exista un IdP de verdad.
