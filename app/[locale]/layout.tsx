import { ReactNode } from 'react';
import { getDictionary } from '@/lib/dictionaries';
import { isValidLocale } from '@/lib/i18n';
import { LocalizedNav } from '@/components/navigation/localized-nav';
import { LocalizedFooter } from '@/components/layout/localized-footer';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'sv' },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  const dictionary = await getDictionary(locale);

  return (
    <div className="min-h-screen">
      <LocalizedNav dictionary={dictionary} locale={locale} />
      <main>
        {children}
      </main>
      <LocalizedFooter dictionary={dictionary} locale={locale} />
    </div>
  );
}