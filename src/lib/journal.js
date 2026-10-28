// Legge gli articoli del Journal da Supabase al momento della build.
// Gli articoli dimostrativi "[DEMO]" non vengono mai pubblicati.
import { SITE } from '../data/site.js';

let cache;
export let journalFetchFailed = false;

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
    journalFetchFailed = true;
    // Su GitHub Actions meglio fermare la pubblicazione che mettere online un Journal vuoto.
    if (process.env.CI) throw new Error(`[journal] articoli non letti da Supabase: ${err.message}`);
    console.warn('[journal] articoli non letti:', err.message);
    cache = [];
  }
  return cache;
}

export const fmtDate = (d) => new Date(d).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Rome' });

// ---------- aiuti per le pagine del Journal ----------
export const fmtShort = (d) => new Date(d).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/Rome' });

// primo paragrafo come estratto quando manca il sottotitolo
export function excerpt(a, max = 190) {
  const txt = a.subtitle || (Array.isArray(a.content) ? (a.content.find((b) => b.type === 'paragraph')?.text || '') : '');
  return txt.length > max ? txt.slice(0, txt.lastIndexOf(' ', max)) + '…' : txt;
}

// categorie e tag che hanno almeno un articolo pubblicato, dal più usato
export function taxonomy(articles) {
  const cats = new Map();
  const tags = new Map();
  for (const a of articles) {
    if (a.category?.slug) {
      const c = cats.get(a.category.slug) || { ...a.category, count: 0 };
      c.count++; cats.set(a.category.slug, c);
    }
    for (const t of a.tags || []) {
      const x = tags.get(t.slug) || { ...t, count: 0 };
      x.count++; tags.set(t.slug, x);
    }
  }
  const by = (x, y) => y.count - x.count || x.name.localeCompare(y.name, 'it');
  return { categories: [...cats.values()].sort(by), tags: [...tags.values()].sort(by) };
}

// indice leggero per la ricerca nel browser
export const searchIndex = (articles) =>
  articles.map((a) => ({
    s: a.slug, t: a.title, c: a.category?.name || '', i: a.cover_image || '', d: a.published_at,
    k: [a.subtitle, a.category?.name, ...(a.tags || []).map((t) => t.name)].filter(Boolean).join(' '),
  }));
