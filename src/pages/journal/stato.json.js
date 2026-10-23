// Impronta del Journal pubblicato con questa build: il controllo automatico la confronta col database.
import { getArticles } from '../../lib/journal.js';
import { journalFingerprint } from '../../lib/journal-fingerprint.js';

export async function GET() {
  const articles = await getArticles();
  return new Response(JSON.stringify({ fingerprint: journalFingerprint(articles), articles: articles.length }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
