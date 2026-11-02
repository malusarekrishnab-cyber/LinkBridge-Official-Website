import { readFileSync, writeFileSync, existsSync } from 'node:fs'
let url = process.env.VITE_SITE_URL
if (!url && existsSync('.env')) {
  const m = readFileSync('.env', 'utf8').match(/^VITE_SITE_URL=(.+)$/m)
  if (m) url = m[1].trim()
}
url = (url || '').replace(/\/$/, '')
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`)
writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}/</loc></url>\n</urlset>\n`)
console.log('SEO files written for', url)
