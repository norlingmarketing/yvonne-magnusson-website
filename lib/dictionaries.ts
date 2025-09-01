import 'server-only';

const dictionaries = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  sv: () => import('@/messages/sv.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};