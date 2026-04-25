import fs from 'node:fs/promises'
import path from 'node:path'

const SOURCE = process.argv[2]
if (!SOURCE) {
  console.error('Usage: node scripts/generate-orcestra-landing.mjs <path-to-figma-output.txt>')
  process.exit(1)
}

const srcText = await fs.readFile(SOURCE, 'utf8')

// Replace remote localhost asset URLs with local URLs (downloaded separately).
const replacedConsts = srcText.replaceAll(
  /const\s+(\w+)\s*=\s*"http:\/\/localhost:3845\/assets\/([^"]+)";/g,
  (_m, varName, filename) =>
    `const ${varName} = new URL('./assets/figma/${filename}', import.meta.url).href;`,
)

// Ensure stable component name.
const replacedComponentName = replacedConsts.replace(
  /export\s+default\s+function\s+Orcestra26Landing\s*\(/g,
  'export default function OrcestraLanding(',
)

// Ensure React import (for React.CSSProperties usage).
const out =
  `import React from 'react'\n\n` +
  replacedComponentName.replace(/^import .*$/gm, '').trimStart()

const outPath = path.resolve('src/OrcestraLanding.tsx')
await fs.writeFile(outPath, out, 'utf8')
console.log(`Wrote ${outPath}`)

