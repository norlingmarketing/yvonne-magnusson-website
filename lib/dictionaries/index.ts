import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  sv: () => import('./sv.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'sv') => {
  return dictionaries[locale]?.() ?? dictionaries.sv();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;