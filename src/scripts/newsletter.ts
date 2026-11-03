// Iscrizione alla newsletter: usata nel Journal e nella home.
// Scrive nel database della newsletter (progetto Outbound) tramite la funzione newsletter_subscribe,
// che accetta l'iscrizione ma non rivela mai chi è già iscritto.
import { NEWSLETTER } from '../data/site.js';

const track = (n: string, d?: Record<string, string>) => (window as any).flTrack?.(n, d);

for (const form of document.querySelectorAll<HTMLFormElement>('[data-newsletter]')) {
  const msg = form.querySelector<HTMLElement>('[data-msg]')!;
  const say = (text: string, kind: '' | 'is-ok' | 'is-err' = '') => {
    msg.textContent = text;
    msg.classList.remove('is-ok', 'is-err');
    if (kind) msg.classList.add(kind);
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    if (fd.get('website')) return;
    const email = String(fd.get('email') || '').trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return say('Controlla l’indirizzo email.', 'is-err');
    if (!fd.get('consent')) return say('Spunta il consenso per iscriverti.', 'is-err');
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    btn.disabled = true;
    say('Un attimo…');
    try {
      const r = await fetch(`${NEWSLETTER.supabaseUrl}/rest/v1/rpc/newsletter_subscribe`, {
        method: 'POST',
        headers: { apikey: NEWSLETTER.supabaseKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ p_email: email.toLowerCase(), p_source: form.dataset.source || 'journal', p_consent: true, p_website: String(fd.get('website') || '') }),
      });
      if (!r.ok) throw 0;
      form.reset();
      say('Iscrizione fatta. Grazie! Riceverai la prossima newsletter.', 'is-ok');
      track('newsletter-iscrizione', { pagina: form.dataset.source || 'journal' });
    } catch {
      say('Non siamo riusciti a iscriverti. Riprova tra poco.', 'is-err');
    } finally {
      btn.disabled = false;
    }
  });
}
