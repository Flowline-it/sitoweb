import { getArticles } from '../lib/journal.js';
import { SITE } from '../data/site.js';

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const articles = await getArticles();
  const urls = [
    { loc: `${SITE.url}/`, lastmod: today },
    { loc: `${SITE.url}/privacy-policy`, lastmod: '2026-02-12' },
  ];
  if (articles.length) {
    urls.push({ loc: `${SITE.url}/journal`, lastmod: (articles[0].updated_at || articles[0].published_at).slice(0, 10) });
    for (const a of articles) urls.push({ loc: `${SITE.url}/journal/${a.slug}`, lastmod: (a.updated_at || a.published_at).slice(0, 10) });
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
