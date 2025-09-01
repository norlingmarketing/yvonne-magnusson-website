import { notFound } from 'next/navigation';
import { locales } from '@/lib/locale-config';
import { getDictionary } from '@/lib/dictionaries';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!['en', 'sv'].includes(locale)) {
    notFound();
  }

  // Load dictionary for navigation and footer
  const dict = await getDictionary(locale as 'sv' | 'en');

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav locale={locale} dict={dict} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}