import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILL = path.join(ROOT, 'public/.well-known/agent-skills/unicornio-azul/SKILL.md');
const INDEX = path.join(ROOT, 'public/.well-known/agent-skills/index.json');

const bytes = await readFile(SKILL);
const digest = `sha256:${createHash('sha256').update(bytes).digest('hex')}`;

const index = {
  $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
  skills: [
    {
      name: 'unicornio-azul',
      type: 'skill-md',
      description:
        'Research Unicornio Azul, list services and cases, and brief a product, sourcing or brand project. Use when an agent needs facts from the site instead of guessing.',
      url: 'https://unicornioazul.es/.well-known/agent-skills/unicornio-azul/SKILL.md',
      digest,
    },
  ],
};

await writeFile(INDEX, `${JSON.stringify(index, null, 2)}\n`);
console.log(`Wrote agent skills index (${digest})`);
