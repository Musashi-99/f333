import fs from 'node:fs/promises'
import path from 'node:path'

const SOURCE = process.argv[2]
if (!SOURCE) {
  console.error('Usage: node scripts/download-figma-assets.mjs <path-to-figma-output.txt>')
  process.exit(1)
}

const OUT_DIR = path.resolve('src/assets/figma')

const text = await fs.readFile(SOURCE, 'utf8')
const urls = [...text.matchAll(/"(?<url>http:\/\/localhost:3845\/assets\/[^"]+)"/g)]
  .map((m) => m.groups?.url)
  .filter(Boolean)

await fs.mkdir(OUT_DIR, { recursive: true })

const unique = [...new Set(urls)]
console.log(`Found ${unique.length} assets`)

for (const url of unique) {
  const filename = url.split('/').pop()
  if (!filename) continue

  const outPath = path.join(OUT_DIR, filename)

  try {
    await fs.access(outPath)
    console.log(`skip ${filename}`)
    continue
  } catch {
    // continue
  }

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status} ${res.statusText}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await fs.writeFile(outPath, buf)
  console.log(`saved ${filename}`)
}
