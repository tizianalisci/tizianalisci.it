export type Lang = 'it' | 'en';

export const SITE = {
  url: 'https://tizianalisci.it',
  name: 'Tiziana Lisci',
  email: 'tizianalisci960@gmail.com',
  instagram: 'tizianalisci',
  instagramUrl: 'https://www.instagram.com/tizianalisci/',
  city: 'Roma',
  region: 'Lazio',
  country: 'IT',
  origin: 'Sardegna',
  school: {
    name: 'Accademia Costume & Moda',
    url: 'https://www.accademiacostumeemoda.it',
    course: 'Fashion Editor, Styling & Communication',
  },
};

export const ROLE: Record<Lang, string> = {
  it: 'Creative Director & Producer',
  en: 'Creative Director & Producer',
};

/** UI strings */
export const T = {
  it: {
    work: 'Lavori',
    about: 'Chi sono',
    contact: 'Contatti',
    index: 'Indice',
    selected: 'Progetti selezionati',
    view: 'Guarda il progetto',
    next: 'Progetto successivo',
    back: 'Tutti i lavori',
    credits: 'Credits',
    role: 'Ruolo',
    year: 'Anno',
    format: 'Formato',
    context: 'Contesto',
    based: 'Roma e Sardegna',
    available: 'Aperta a collaborazioni, produzioni e direzione creativa',
    writeMe: 'Scrivimi',
    talk: 'Parliamo di un progetto',
    skip: 'Vai al contenuto',
    switchTo: 'English',
    switchLabel: 'Read in English',
    rights: 'Tutti i diritti riservati',
    notFound: 'Questa pagina non esiste. Ma ci sono altre storie.',
    home: 'Torna alla home',
    chapter: 'Capitolo',
    menu: 'Menu',
  },
  en: {
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    index: 'Index',
    selected: 'Selected projects',
    view: 'View project',
    next: 'Next project',
    back: 'All work',
    credits: 'Credits',
    role: 'Role',
    year: 'Year',
    format: 'Format',
    context: 'Context',
    based: 'Rome and Sardinia',
    available: 'Open to collaborations, productions and creative direction',
    writeMe: 'Write to me',
    talk: "Let's talk about a project",
    skip: 'Skip to content',
    switchTo: 'Italiano',
    switchLabel: 'Leggi in italiano',
    rights: 'All rights reserved',
    notFound: "This page doesn't exist. But there are other stories.",
    home: 'Back to home',
    chapter: 'Chapter',
    menu: 'Menu',
  },
} as const;

/** Base path when the site is served from a subfolder (e.g. username.github.io/tizianalisci.it/). Empty on the real domain. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Paths are shared between languages: /work/x/ ↔ /en/work/x/ (used for canonical URLs and SEO) */
export function localePath(lang: Lang, path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'it' ? clean : `/en${clean === '/' ? '/' : clean}`;
}

export function stripLocale(pathname: string) {
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
}

/** Link to a page, including the base path. Use this for every internal href. */
export function href(lang: Lang, path: string) {
  return BASE + localePath(lang, path);
}

/** Link to a file in public/, including the base path. */
export function asset(path: string) {
  return BASE + path;
}
