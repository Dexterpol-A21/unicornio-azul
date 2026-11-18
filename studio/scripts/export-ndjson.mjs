import {readdirSync, readFileSync, writeFileSync} from 'node:fs'
import {join} from 'node:path'

const blogDir = join(process.cwd(), '..', 'src', 'content', 'blog')
const outFile = join(process.cwd(), 'scripts', 'posts.ndjson')

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1)
  }
  return value
}

function parseFrontmatter(block) {
  const data = {}
  let key = ''
  for (const line of block.split(/\r?\n/)) {
    if (!line.trim()) continue
    const item = line.match(/^\s+-\s+(.*)$/)
    if (item && key) {
      const list = Array.isArray(data[key]) ? data[key] : []
      list.push(unquote(item[1].trim()))
      data[key] = list
      continue
    }
    const splitAt = line.indexOf(':')
    if (splitAt === -1) continue
    key = line.slice(0, splitAt).trim()
    const raw = line.slice(splitAt + 1).trim()
    if (!raw) {
      data[key] = []
      continue
    }
    if (raw.startsWith('[') && raw.endsWith(']')) {
      data[key] = raw
        .slice(1, -1)
        .split(',')
        .map((part) => unquote(part.trim()))
        .filter(Boolean)
      key = ''
      continue
    }
    if (raw === 'true' || raw === 'false') data[key] = raw === 'true'
    else if (/^\d+$/.test(raw)) data[key] = Number(raw)
    else data[key] = unquote(raw)
  }
  return data
}

const lines = []
for (const lang of ['es', 'en']) {
  const dir = join(blogDir, lang)
  for (const file of readdirSync(dir).filter((name) => name.endsWith('.md'))) {
    const raw = readFileSync(join(dir, file), 'utf8')
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
    if (!match) throw new Error(`Sin frontmatter: ${lang}/${file}`)
    const data = parseFrontmatter(match[1])
    if (!data.title || !data.urlSlug || data.lang !== lang) {
      throw new Error(`Frontmatter incompleto: ${lang}/${file}`)
    }
    lines.push(JSON.stringify({
      _id: `post-${data.lang}-${data.urlSlug}`,
      _type: 'post',
      title: data.title,
      description: data.description,
      lang: data.lang,
      urlSlug: data.urlSlug,
      publishedAt: `${data.publishedAt}T00:00:00.000Z`,
      category: data.category,
      heroImage: data.heroImage,
      heroImageAlt: data.heroImageAlt,
      readMinutes: data.readMinutes,
      tags: data.tags ?? [],
      featured: Boolean(data.featured),
      draft: Boolean(data.draft),
      body: match[2].replace(/^\r?\n/, '').trimEnd() + '\n',
    }))
  }
}

writeFileSync(outFile, lines.join('\n') + '\n')
console.log(`Escritos ${lines.length} artículos en ${outFile}`)
