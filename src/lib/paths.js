// Percorsi che funzionano sia su flowline.it sia sull'indirizzo di prova (flowline-it.github.io/sito).
const B = import.meta.env.BASE_URL.replace(/\/$/, '');
export const p = (path = '/') => (path.startsWith('/') ? B + path : path);
export const isHome = (url) => url.pathname.replace(/\/$/, '') === B;
