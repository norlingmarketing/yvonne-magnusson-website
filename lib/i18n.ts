export const locales = ['en', 'sv'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'sv';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  sv: 'Svenska',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}