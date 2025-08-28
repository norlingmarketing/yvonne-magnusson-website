import { ReactNode } from 'react';
import { getDictionary } from '@/lib/dictionaries';
import { isValidLocale } from '@/lib/i18n';
import { LocaleSwitcher } from '@/components/locale-switcher';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
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
  const locale = params.locale;
  
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  const dictionary = await getDictionary(locale);

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Yvonne Magnusson</h1>
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}