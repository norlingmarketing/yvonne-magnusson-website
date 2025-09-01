import 'server-only';

const dictionaries = {
  sv: () => import('@/messages/sv.json').then((module) => module.default),
  en: () => import('@/messages/en.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]?.() ?? dictionaries.sv();
};