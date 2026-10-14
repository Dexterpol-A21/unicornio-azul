# Registro de cambios — Octubre 2026

> Registro mensual del trabajo en Unicornio Azul y Utrilla Contract.

---

## Agent discovery — API, MCP, skills (14 oct 2026)

Auditoría isitagentready: bloque **API, Auth, MCP & Skill Discovery 0/8**. Se publica lo que el sitio puede cumplir de verdad. **No** hay OAuth/OIDC: no hay login ni API protegida; no se inventan `authorization_endpoint` ni `jwks_uri`.

### Hecho

- **API pública de solo lectura:** `/api/v1/health`, `/firm`, `/services`, `/cases` + OpenAPI en `/api/v1/openapi.json`.
- **API Catalog (RFC 9727):** `/.well-known/api-catalog` (`application/linkset+json`) con `service-desc`, `service-doc` (llms.txt) y `status`.
- **MCP real:** `functions/mcp.js` en `/mcp` (JSON-RPC: `list_services`, `list_cases`, `get_contact`). Card en `/.well-known/mcp/server-card.json` y `/.well-known/mcp.json`.
- **Agent Skills:** `/.well-known/agent-skills/index.json` + `unicornio-azul/SKILL.md` (digest SHA-256 en el build).
- **WebMCP:** `src/components/global/WebMcp.astro` registra las mismas acciones en el navegador.
- **ARD:** `/.well-known/ai-catalog.json`, `Agentmap` en `robots.txt`, `<link rel="ai-catalog">` en el head.
- **auth.md:** `/auth.md` deja claro que no hay registro OAuth de agentes; el contacto es `/empezar` o email.

### No hecho (a propósito)

- `/.well-known/openid-configuration`
- `/.well-known/oauth-authorization-server`
- `/.well-known/oauth-protected-resource`

Esos checks seguirán en 404 hasta que exista un IdP de verdad.
