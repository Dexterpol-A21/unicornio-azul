import GithubSlugger from 'github-slugger'
import { Marked, type Tokens } from 'marked'

export type MarkdownHeading = {
  depth: number
  slug: string
  text: string
}

export function renderMarkdown(source: string): { html: string; headings: MarkdownHeading[] } {
  const headings: MarkdownHeading[] = []
  const slugger = new GithubSlugger()
  const marked = new Marked({ gfm: true, async: false })

  marked.use({
    renderer: {
      heading(this: { parser: { parseInline: (tokens: Tokens.Generic[]) => string } }, { tokens, depth }: Tokens.Heading) {
        const text = this.parser.parseInline(tokens)
        const plain = decodeEntities(text.replace(/<[^>]+>/g, ''))
        const slug = slugger.slug(plain)
        headings.push({ depth, slug, text: plain })
        return `<h${depth} id="${slug}">${text}</h${depth}>\n`
      },
    },
  })

  const html = marked.parse(source) as string
  return { html, headings }
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}
