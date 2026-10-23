// Impronta degli articoli visibili sul sito: cambia quando si pubblica, modifica, programma o toglie un articolo.
// La usa la build (pagina /journal/stato.json) e il controllo automatico ogni 15 minuti (scripts/journal-check.mjs).
import { createHash } from 'node:crypto';

export function journalFingerprint(articles) {
  const norm = [...articles]
    .sort((a, b) => String(a.id).localeCompare(String(b.id)))
    .map((a) => ({ ...a, journal_article_tags: undefined }));
  return createHash('sha256').update(JSON.stringify(norm)).digest('hex').slice(0, 32);
}
