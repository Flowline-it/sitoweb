// Journal: animazioni, ricerca, caroselli, mi piace, commenti e newsletter.
// Parla con Supabase solo con la chiave pubblica "anon": le regole RLS decidono cosa si può fare.
import { SITE } from '../data/site.js';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const KEY = SITE.supabaseAnonKey;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel as any)] as T[];

function api(path: string, init: RequestInit = {}) {
  return fetch(`${SITE.supabaseUrl}/rest/v1/${path}`, {
    ...init,
    headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
  });
}
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string | null) { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} },
};

/* ---------- ingresso a parole, immagini che si aprono ---------- */
function splitWords(el: HTMLElement) {
  let n = 0;
  const walk = (node: Node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === 3) {
        const parts = (child.textContent || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const part of parts) {
          if (!part) continue;
          if (/^\s+$/.test(part)) frag.append(part);
          else { const s = document.createElement('span'); s.className = 'w'; s.style.setProperty('--w', String(n++)); s.textContent = part; frag.append(s); }
        }
        child.replaceWith(frag);
      } else if (child.nodeType === 1) walk(child);
    }
  };
  walk(el);
  el.classList.add('is-split');
}
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io!.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })
  : null;
for (const el of $$('[data-split]')) { if (!reduced) splitWords(el); io ? io.observe(el) : el.classList.add('is-in'); }
for (const el of $$('[data-zoom], [data-in]')) io ? io.observe(el) : el.classList.add('is-in');
// copertine in pila che si inclinano appena col mouse
if (finePointer && !reduced) for (const el of $$('[data-tilt]')) {
  const zone = el.closest('section') || el.parentElement!;
  zone.addEventListener('pointermove', (e: PointerEvent) => {
    const r = zone.getBoundingClientRect();
    el.style.setProperty('--tx', `${((e.clientX - r.left) / r.width - 0.5) * 18}px`);
    el.style.setProperty('--ty', `${((e.clientY - r.top) / r.height - 0.5) * 14}px`);
  });
  zone.addEventListener('pointerleave', () => { el.style.setProperty('--tx', '0px'); el.style.setProperty('--ty', '0px'); });
}

/* ---------- titolo che si "decifra" ---------- */
const GLYPHS = 'abcdefghijklmnopqrstuvwxyz0123456789';
for (const el of $$('[data-scramble]')) {
  const text = el.textContent || '';
  if (reduced || !text) continue;
  el.setAttribute('aria-label', text);
  const start = performance.now();
  const dur = Math.min(1400, 500 + text.length * 40);
  const tick = (t: number) => {
    const k = Math.min(1, (t - start) / dur);
    const shown = Math.floor(text.length * k);
    let html = esc(text.slice(0, shown));
    for (let i = shown; i < text.length; i++) {
      const ch = text[i];
      html += ch === ' ' ? ' ' : `<span class="s" aria-hidden="true">${GLYPHS[(Math.random() * GLYPHS.length) | 0]}</span>`;
    }
    el.innerHTML = html;
    if (k < 1) requestAnimationFrame(tick); else el.textContent = text;
  };
  requestAnimationFrame(tick);
}

/* ---------- sfera che segue appena il mouse ---------- */
if (finePointer && !reduced) {
  for (const orb of $$('[data-orb]')) {
    const zone = orb.closest('section') || orb.parentElement!;
    zone.addEventListener('pointermove', (e: PointerEvent) => {
      const r = zone.getBoundingClientRect();
      orb.style.setProperty('--ox', `${((e.clientX - r.left) / r.width - 0.5) * 28}px`);
      orb.style.setProperty('--oy', `${((e.clientY - r.top) / r.height - 0.5) * 22}px`);
    });
    zone.addEventListener('pointerleave', () => { orb.style.setProperty('--ox', '0px'); orb.style.setProperty('--oy', '0px'); });
  }
}

/* ---------- caroselli ---------- */
for (const car of $$('[data-carousel]')) {
  const track = car.querySelector<HTMLElement>('.jcar__track')!;
  const nav = car.querySelector<HTMLElement>('.jcar__nav')!;
  const [prev, next] = $$<HTMLButtonElement>('.jcar__btn', car);
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    nav.hidden = max < 4;
    prev.disabled = track.scrollLeft < 4;
    next.disabled = track.scrollLeft > max - 4;
  };
  for (const b of [prev, next]) b.addEventListener('click', () => {
    const step = track.clientWidth * 0.85 * Number(b.dataset.dir);
    track.scrollBy({ left: step, behavior: reduced ? 'auto' : 'smooth' });
  });
  track.addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

/* ---------- menu "Temi" ---------- */
for (const d of $$<HTMLDetailsElement>('[data-drop]')) {
  const panel = d.querySelector<HTMLElement>('.jdrop__panel')!;
  const place = () => {
    const r = d.querySelector('summary')!.getBoundingClientRect();
    const w = panel.offsetWidth;
    panel.style.top = `${r.bottom + 8}px`;
    panel.style.left = `${Math.max(12, Math.min(r.left, innerWidth - w - 12))}px`;
  };
  d.addEventListener('toggle', () => { if (d.open) place(); });
  document.addEventListener('click', (e) => { if (d.open && !d.contains(e.target as Node)) d.open = false; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') d.open = false; });
  addEventListener('scroll', () => { if (d.open) d.open = false; }, { passive: true });
  addEventListener('resize', () => { if (d.open) place(); });
}

/* ---------- ricerca istantanea ---------- */
for (const form of $$<HTMLFormElement>('[data-search]')) {
  const input = form.querySelector<HTMLInputElement>('input')!;
  const box = form.querySelector<HTMLElement>('.jsearch__results')!;
  const data: { s: string; t: string; c: string; i: string; d: string; k: string }[] = JSON.parse(form.querySelector('[data-index]')?.textContent || '[]');
  const hay = data.map((a) => norm(`${a.t} ${a.c} ${a.k}`));
  let sel = -1;
  const mark = (t: string, words: string[]) => {
    let out = esc(t);
    for (const w of words) if (w.length > 1) out = out.replace(new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
    return out;
  };
  const render = () => {
    const q = norm(input.value.trim());
    sel = -1;
    if (!q) { box.hidden = true; input.setAttribute('aria-expanded', 'false'); return; }
    const words = q.split(/\s+/).filter(Boolean);
    const hits = data.filter((_, i) => words.every((w) => hay[i].includes(w))).slice(0, 6);
    box.innerHTML = hits.length
      ? hits.map((a) => `<a href="${BASE}/journal/${a.s}/" role="option">${a.i ? `<img src="${esc(a.i)}" alt="" loading="lazy">` : '<i></i>'}<span><b>${mark(a.t, input.value.trim().split(/\s+/))}</b><span>${esc(a.c)} · ${new Date(a.d).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' })}</span></span></a>`).join('')
      : `<p>Nessun articolo per “${esc(input.value.trim())}”. Prova con un altro tema.</p>`;
    box.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  };
  input.addEventListener('input', render);
  input.addEventListener('focus', () => { if (input.value.trim()) render(); });
  input.addEventListener('keydown', (e) => {
    const links = $$<HTMLAnchorElement>('a', box);
    if (e.key === 'Escape') { input.value = ''; render(); return; }
    if (!links.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
      links.forEach((l, i) => l.classList.toggle('is-on', i === sel));
    } else if (e.key === 'Enter') { e.preventDefault(); (links[Math.max(sel, 0)]).click(); }
  });
  document.addEventListener('click', (e) => { if (!form.contains(e.target as Node)) box.hidden = true; });
}

/* ---------- contatori: mi piace e commenti per gli elenchi ---------- */
type Stat = { article_id: string; likes: number; comments: number };
let statsCache: Promise<Map<string, Stat>> | null = null;
function getStats() {
  statsCache ||= api('rpc/journal_stats', { method: 'POST', body: '{}' })
    .then((r) => (r.ok ? r.json() : []))
    .then((rows: Stat[]) => new Map(rows.map((s) => [s.article_id, s])))
    .catch(() => new Map());
  return statsCache;
}
const score = (s?: Stat) => (s ? s.likes + s.comments * 2 : 0);
if (document.querySelector('[data-stats], [data-rank], [data-filters]')) {
  getStats().then((stats) => {
    for (const el of $$('[data-stats]')) {
      const s = stats.get(el.dataset.stats!);
      el.querySelector('[data-likes]')!.textContent = String(s?.likes || 0);
      el.querySelector('[data-comments]')!.textContent = String(s?.comments || 0);
    }
    // "scelti dalla redazione": prima i più apprezzati (a parità resta l'ordine per data)
    for (const list of $$('[data-rank]')) {
      const items = $$(':scope > li', list);
      items
        .map((li, i) => ({ li, i, sc: score(stats.get(li.querySelector<HTMLElement>('[data-id]')?.dataset.id || '')) }))
        .sort((a, b) => b.sc - a.sc || a.i - b.i)
        .forEach(({ li }) => list.append(li));
    }
  });
}

/* ---------- filtri e ricerca nelle pagine argomento ---------- */
const filters = document.querySelector<HTMLElement>('[data-filters]');
if (filters) {
  const list = document.querySelector<HTMLElement>('[data-postlist]')!;
  const items = $$('.jpost', list);
  const empty = document.querySelector<HTMLElement>('[data-postempty]')!;
  const search = document.querySelector<HTMLInputElement>('[data-cat-search]');
  let mode = 'recent';
  // in cima ci sono già i primi tre: nell'elenco compaiono solo quando si filtra o si cerca
  const feat = document.querySelector<HTMLElement>('.jcat-feat');
  const topIds = new Set(feat ? items.slice(0, 3).map((el) => el.dataset.id) : []);
  const apply = async () => {
    const q = norm(search?.value.trim() || '');
    const active = !!q || mode !== 'recent';
    if (feat) feat.hidden = active;
    const stats = mode === 'liked' ? await getStats() : null;
    const sorted = [...items].sort((a, b) =>
      mode === 'liked' ? score(stats!.get(b.dataset.id!)) - score(stats!.get(a.dataset.id!)) || Date.parse(b.dataset.date!) - Date.parse(a.dataset.date!)
      : Date.parse(b.dataset.date!) - Date.parse(a.dataset.date!));
    let shown = 0;
    for (const el of sorted) {
      const ok = (!q || q.split(/\s+/).every((w) => norm(el.dataset.q || '').includes(w))) && (mode !== 'quick' || Number(el.dataset.time) <= 3);
      el.hidden = !ok || (!active && topIds.has(el.dataset.id));
      el.classList.add('is-in');
      if (ok) shown++;
      list.append(el);
    }
    empty.hidden = shown > 0;
  };
  apply();
  for (const b of $$<HTMLButtonElement>('button', filters)) b.addEventListener('click', () => {
    mode = b.dataset.sort!;
    $$('button', filters).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    apply();
  });
  search?.addEventListener('input', apply);
}

/* ---------- articolo: barra di lettura ---------- */
const readbar = document.querySelector<HTMLElement>('[data-readbar]');
if (readbar) {
  const head = document.querySelector<HTMLElement>('.jart__head')!;
  const body = document.querySelector<HTMLElement>('.jbody')!;
  let ticking = false;
  const update = () => {
    ticking = false;
    const hb = head.getBoundingClientRect().bottom;
    readbar.classList.toggle('is-on', hb < 0);
    document.documentElement.classList.toggle('is-reading', hb < 0);
    const r = body.getBoundingClientRect();
    const total = r.height - innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, (-r.top + innerHeight * 0.2) / Math.max(1, total)));
    readbar.style.setProperty('--p', p.toFixed(4));
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* ---------- condividi: copia link ---------- */
for (const b of $$<HTMLButtonElement>('[data-copy]')) b.addEventListener('click', async () => {
  const url = location.href.split('#')[0];
  try {
    if (navigator.share && matchMedia('(pointer: coarse)').matches) { await navigator.share({ title: document.title, url }); return; }
    await navigator.clipboard.writeText(url);
    const old = b.getAttribute('aria-label') || '';
    b.setAttribute('aria-label', 'Link copiato');
    b.dataset.tip = 'Link copiato';
    b.classList.add('is-copied');
    setTimeout(() => { b.setAttribute('aria-label', old); b.classList.remove('is-copied'); }, 1800);
  } catch {}
});

/* ---------- mi piace ---------- */
const likeButtons = $$<HTMLButtonElement>('[data-like]');
if (likeButtons.length) {
  const id = likeButtons[0].dataset.like!;
  const k = `fl-like:${id}`;
  let liked = store.get(k) === '1';
  let count = 0;
  let busy = false;
  const paint = (pop = false) => likeButtons.forEach((b) => {
    b.setAttribute('aria-pressed', String(liked));
    const n = b.querySelector('[data-n]'); if (n) n.textContent = String(count);
    if (pop && !reduced) { b.classList.remove('is-pop'); void b.offsetWidth; b.classList.add('is-pop'); }
  });
  paint();
  api(`journal_article_likes?select=likes&article_id=eq.${id}`).then((r) => (r.ok ? r.json() : [])).then((rows) => { count = rows[0]?.likes || 0; paint(); }).catch(() => {});
  likeButtons.forEach((b) => b.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    const delta = liked ? -1 : 1;
    liked = !liked; count = Math.max(0, count + delta); store.set(k, liked ? '1' : null); paint(liked);
    try {
      const r = await api('rpc/journal_like', { method: 'POST', body: JSON.stringify({ p_article: id, p_delta: delta }) });
      if (r.ok) { count = await r.json(); paint(); } else throw 0;
    } catch {
      liked = !liked; count = Math.max(0, count - delta); store.set(k, liked ? '1' : null); paint();
    } finally { busy = false; }
  }));
}

/* ---------- commenti ---------- */
const croot = document.querySelector<HTMLElement>('[data-thread]');
if (croot) {
  const id = croot.dataset.thread!;
  const list = croot.querySelector<HTMLElement>('.jclist')!;
  const form = croot.querySelector<HTMLFormElement>('.jcform')!;
  const home = form.parentElement!;
  const to = form.querySelector<HTMLElement>('.jcform__to')!;
  const msg = form.querySelector<HTMLElement>('.jmsg')!;
  const rtf = new Intl.RelativeTimeFormat('it', { numeric: 'auto' });
  const ago = (d: string) => {
    const s = (Date.parse(d) - Date.now()) / 1000;
    const units: [Intl.RelativeTimeFormatUnit, number][] = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (const [u, sec] of units) if (Math.abs(s) >= sec) return rtf.format(Math.round(s / sec), u);
    return 'adesso';
  };
  type C = { id: string; parent_id: string | null; author_name: string; body: string; created_at: string };
  let replyTo: C | null = null;
  const card = (c: C, at?: C) => `
    <article class="jc" id="c-${c.id}">
      <div class="jc__top"><span class="jc__av" aria-hidden="true">${esc(c.author_name.trim()[0]?.toUpperCase() || '?')}</span><div><b>${esc(c.author_name)}</b><time datetime="${c.created_at}">${ago(c.created_at)}</time></div></div>
      <p class="jc__body">${at ? `<em>@${esc(at.author_name)}</em> ` : ''}${esc(c.body)}</p>
      <div class="jc__acts"><button class="jc__reply" type="button" data-reply="${c.id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 6 6v5"/></svg>Rispondi</button></div>
    </article>`;
  const load = async () => {
    let rows: C[] = [];
    try {
      const r = await api(`journal_comments?select=id,parent_id,author_name,body,created_at&article_id=eq.${id}&order=created_at.asc`);
      if (r.ok) rows = await r.json();
    } catch {}
    const byId = new Map(rows.map((c) => [c.id, c]));
    const rootOf = (c: C): C => { let x = c; let guard = 0; while (x.parent_id && byId.has(x.parent_id) && guard++ < 20) x = byId.get(x.parent_id)!; return x; };
    const roots = rows.filter((c) => !c.parent_id || !byId.has(c.parent_id));
    const kids = new Map<string, C[]>();
    for (const c of rows) if (c.parent_id && byId.has(c.parent_id)) { const r = rootOf(c).id; kids.set(r, [...(kids.get(r) || []), c]); }
    $$('[data-ccount]').forEach((el) => (el.textContent = String(rows.length)));
    list.innerHTML = roots.length
      ? roots.map((c) => `<div class="jthread">${card(c)}${kids.get(c.id) ? `<div class="jc__kids">${kids.get(c.id)!.map((k) => card(k, k.parent_id !== c.id ? byId.get(k.parent_id!) : undefined)).join('')}</div>` : ''}</div>`).join('')
      : '<p class="jcempty">Ancora nessun commento. Inizia tu la discussione.</p>';
    for (const b of $$<HTMLButtonElement>('[data-reply]', list)) b.addEventListener('click', () => {
      replyTo = byId.get(b.dataset.reply!) || null;
      if (!replyTo) return;
      to.hidden = false;
      to.querySelector('span')!.textContent = `Rispondi a ${replyTo.author_name}`;
      b.closest('.jc')!.after(form);
      form.querySelector<HTMLInputElement>('input[name="name"]')!.focus({ preventScroll: false });
    });
  };
  to.querySelector('button')!.addEventListener('click', () => { replyTo = null; to.hidden = true; home.append(form); });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    if (fd.get('website')) return;
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const body = String(fd.get('body') || '').trim();
    msg.className = 'jmsg is-err';
    if (name.length < 2) { msg.textContent = 'Scrivi il tuo nome (almeno 2 lettere).'; return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { msg.textContent = 'Controlla l’indirizzo email.'; return; }
    if (body.length < 3) { msg.textContent = 'Il commento è troppo corto.'; return; }
    if (!fd.get('consent')) { msg.textContent = 'Serve il consenso al trattamento dei dati per pubblicare.'; return; }
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    btn.disabled = true; msg.className = 'jmsg'; msg.textContent = 'Invio in corso…';
    try {
      const r = await api('journal_comments', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ article_id: id, parent_id: replyTo?.id || null, author_name: name, author_email: email, body }) });
      if (!r.ok) { const t = await r.text(); throw new Error(/Troppi commenti/.test(t) ? 'Hai inviato molti commenti in poco tempo: riprova tra qualche minuto.' : 'Non siamo riusciti a inviare il commento. Riprova.'); }
      form.reset();
      msg.className = 'jmsg is-ok';
      msg.textContent = 'Grazie! Il commento sarà visibile appena approvato dalla redazione.';
      replyTo = null; to.hidden = true; home.append(form);
    } catch (err: any) { msg.className = 'jmsg is-err'; msg.textContent = err?.message || 'Errore di rete. Riprova.'; }
    finally { btn.disabled = false; }
  });
  // carica i commenti quando la sezione si avvicina
  if ('IntersectionObserver' in window) {
    const lo = new IntersectionObserver((en) => { if (en.some((x) => x.isIntersecting)) { lo.disconnect(); load(); } }, { rootMargin: '600px 0px' });
    lo.observe(croot);
  } else load();
  // conteggio subito, per la barra in alto
  api(`journal_comments?select=id&article_id=eq.${id}`, { method: 'HEAD', headers: { Prefer: 'count=exact' } })
    .then((r) => { const n = r.headers.get('content-range')?.split('/')[1]; if (n && n !== '*') $$('[data-ccount]').forEach((el) => (el.textContent = n)); })
    .catch(() => {});
}

/* ---------- newsletter ---------- */
for (const form of $$<HTMLFormElement>('[data-newsletter]')) {
  const msg = form.querySelector<HTMLElement>('.jmsg')!;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    if (fd.get('website')) return;
    const email = String(fd.get('email') || '').trim();
    msg.className = 'jmsg is-err';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { msg.textContent = 'Controlla l’indirizzo email.'; return; }
    if (!fd.get('consent')) { msg.textContent = 'Spunta il consenso per iscriverti.'; return; }
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    btn.disabled = true; msg.className = 'jmsg'; msg.textContent = 'Un attimo…';
    try {
      const r = await api('journal_newsletter', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ email: email.toLowerCase(), consent: true, source: form.dataset.source || 'journal' }) });
      if (!r.ok && r.status !== 409) throw 0;
      form.reset();
      msg.className = 'jmsg is-ok';
      msg.textContent = r.status === 409 ? 'Sei già iscritto: a presto nella tua casella.' : 'Iscrizione fatta. Grazie!';
    } catch { msg.className = 'jmsg is-err'; msg.textContent = 'Non siamo riusciti a iscriverti. Riprova tra poco.'; }
    finally { btn.disabled = false; }
  });
}
