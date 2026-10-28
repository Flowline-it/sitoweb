// Percorsi che funzionano sia su flowline.it sia sull'indirizzo di prova (flowline-it.github.io/sitoweb).
const B = import.meta.env.BASE_URL.replace(/\/$/, '');
// Le pagine hanno sempre la barra finale (/metodo/): è la forma che GitHub Pages, Apache e LiteSpeed servono
// da soli per le cartelle, quindi canonical, sitemap e link coincidono con l'indirizzo reale, senza redirect.
// File (con estensione), ancore e query restano come sono.
export const slash = (path = '/') => {
  const m = path.match(/^([^?#]*)(.*)$/);
  const [, pathname, rest] = m;
  if (!pathname || pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(pathname)) return path;
  return pathname + '/' + rest;
};
export const p = (path = '/') => (path.startsWith('/') ? B + slash(path) : path);
export const isHome = (url) => url.pathname.replace(/\/$/, '') === B;
