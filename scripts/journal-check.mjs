// Controllo automatico (GitHub Actions, ogni 15 minuti): il Journal nel database è cambiato rispetto al sito online?
// Scrive changed=true|false in GITHUB_OUTPUT. In caso di dubbio ricostruisce (changed=true).
import { appendFileSync } from 'node:fs';
import { getArticles } from '../src/lib/journal.js';
import * as J from '../src/lib/journal.js';
import { journalFingerprint } from '../src/lib/journal-fingerprint.js';

const live = (process.env.LIVE_URL || 'https://flowline-it.github.io/sitoweb').replace(/\/$/, '');
const out = (changed, why) => {
  console.log(`changed=${changed} (${why})`);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
};

let articles;
try { articles = await getArticles(); } catch (e) { out(false, 'database non raggiungibile: ' + e.message); process.exit(0); }
if (J.journalFetchFailed) { out(false, 'database non raggiungibile'); process.exit(0); }
const now = journalFingerprint(articles);
let online = null;
try {
  const res = await fetch(`${live}/journal/stato.json`, { cache: 'no-store' });
  if (res.ok) online = (await res.json()).fingerprint;
} catch {}
if (!online) out(true, 'impronta online non trovata');
else if (online !== now) out(true, `online ${online} → database ${now}`);
else out(false, 'nessuna novità');
