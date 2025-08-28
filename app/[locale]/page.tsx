import { getDictionary } from '@/lib/dictionaries';
import { isValidLocale } from '@/lib/i18n';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = params.locale;
  
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  const dictionary = await getDictionary(locale);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {dictionary.home.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {dictionary.home.subtitle}
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {dictionary.home.description}
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            {dictionary.services.title}
          </h3>
          <p className="text-gray-600">
            {dictionary.services.description}
          </p>
        </div>
        
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            {dictionary.about.title}
          </h3>
          <p className="text-gray-600">
            {dictionary.about.description}
          </p>
        </div>
        
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            {dictionary.contact.title}
          </h3>
          <p className="text-gray-600">
            {dictionary.contact.description}
          </p>
        </div>
      </section>

      <section className="text-center">
        <a
          href={`/${locale}/kontakt`}
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {dictionary.common.getInTouch}
        </a>
      </section>
    </div>
  );
}