import type { Locale } from '@/lib/i18n';

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatNumber(number: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'sv' ? 'sv-SE' : 'en-US').format(number);
}

export function formatCurrency(
  amount: number,
  locale: Locale,
  currency: 'SEK' | 'USD' | 'EUR' = 'SEK'
): string {
  return new Intl.NumberFormat(locale === 'sv' ? 'sv-SE' : 'en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}