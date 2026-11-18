import handler from '@astrojs/cloudflare/entrypoints/server'
import { onRequest as lead } from '../functions/api/lead.js'
import { onRequest as markdown } from '../functions/_middleware.js'
import { onRequest as mcp } from '../functions/mcp.js'

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    if (url.hostname === 'www.unicornioazul.es') {
      url.hostname = 'unicornioazul.es'
      return Response.redirect(url.toString(), 301)
    }
    const path = url.pathname.replace(/\/$/, '') || '/'
    if (path === '/api/lead') return lead({ request, env })
    if (path === '/mcp') return mcp({ request })
    return markdown({
      request,
      env,
      next: () => handler.fetch(request, env, ctx),
    })
  },
}
