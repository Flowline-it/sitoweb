# flowline.it

Sito pubblico di Flowline: HTML statico generato con [Astro](https://astro.build), testi e struttura dal piano "Ristrutturazione flowline.it" (ottobre 2026).

## Dove sta cosa

| Cosa | File |
| --- | --- |
| Tutti i testi della home, FAQ, dati societari | `src/data/site.js` |
| Colori, font, stili comuni | `src/styles/global.css` |
| Home | `src/pages/index.astro` |
| Form contatti (scrive in Supabase `consultations`) | `src/components/ContactForm.astro` |
| Disegno "da sparso a ordinato" del Metodo | `src/components/LineDiagram.astro` |
| Journal (letto da Supabase alla build) | `src/lib/journal.js`, `src/pages/journal/` |
| Privacy, 404, assistente WhatsApp | `src/pages/` |
| Foto d'archivio e schermata di Outbound | `src/assets/img/` (crediti in `src/data/site.js` → `CREDITS`) |

## Lavorare in locale

```bash
npm install
npm run dev      # anteprima su http://localhost:4321
npm run build    # genera dist/
```

`JOURNAL_INCLUDE_DEMO=1 npm run build` include gli articoli "[DEMO]" per provare il modello di pagina; senza variabile non vengono mai pubblicati.

## Pubblicazione

Ogni push su `main` ricostruisce e pubblica il sito su GitHub Pages (`.github/workflows/deploy.yml`). Il sito si ricostruisce anche:

- ogni notte alle 2 (UTC), per gli articoli programmati;
- su richiesta, con un `repository_dispatch` di tipo `journal-update` (da un webhook Supabase o da n8n quando si pubblica un articolo):

```bash
curl -X POST https://api.github.com/repos/Flowline-it/sitoweb/dispatches \
  -H "Authorization: Bearer <token con permesso contents:write>" \
  -H "Accept: application/vnd.github+json" \
  -d '{"event_type":"journal-update"}'
```

## Sicurezza del form

Il sito usa la chiave pubblica `anon` di Supabase. Sulla tabella `consultations` deve esserci RLS attiva con la sola policy di **inserimento** per `anon`: nessuna policy di lettura, altrimenti i contatti diventano scaricabili da chiunque.
