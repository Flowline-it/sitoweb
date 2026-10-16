// Legge gli articoli del Journal da Supabase al momento della build.
// Gli articoli dimostrativi "[DEMO]" non vengono mai pubblicati.
import { SITE } from '../data/site.js';

let cache;

export async function getArticles() {
  if (cache) return cache;
  const url = `${SITE.supabaseUrl}/rest/v1/journal_articles?select=*,journal_categories(name,slug),journal_authors(name,slug,bio),journal_article_tags(journal_tags(name,slug))&status=eq.published&order=published_at.desc`;
  try {
    const res = await fetch(url, { headers: { apikey: SITE.supabaseAnonKey, Authorization: `Bearer ${SITE.supabaseAnonKey}` } });
    if (!res.ok) throw new Error(`Supabase ${res.status}`);
    const rows = await res.json();
    const now = Date.now();
    cache = rows
      .filter((a) => process.env.JOURNAL_INCLUDE_DEMO === '1' || (!/^\s*\[DEMO\]/i.test(a.title || '') && !/^demo-/.test(a.slug || '')))
      .filter((a) => !a.published_at || Date.parse(a.published_at) <= now)
      .map((a) => ({
        ...a,
        category: a.journal_categories,
        author: a.journal_authors,
        tags: (a.journal_article_tags || []).map((t) => t.journal_tags).filter(Boolean),
      }));
  } catch (err) {
    console.warn('[journal] articoli non letti:', err.message);
    cache = [];
  }
  return cache;
}

export const fmtDate = (d) => new Date(d).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Rome' });
