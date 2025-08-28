import { getDictionary } from '@/lib/dictionaries';
import { isValidLocale } from '@/lib/i18n';

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  const dictionary = await getDictionary(locale);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {dictionary.about.pageTitle}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {dictionary.about.pageDescription}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {dictionary.services.title}
            </h3>
            <ul className="space-y-2">
              <li>• {dictionary.services.boardWork}</li>
              <li>• {dictionary.services.seniorAdvisor}</li>
              <li>• {dictionary.services.interimLeader}</li>
              <li>• {dictionary.services.workshops}</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {dictionary.contact.contactSection}
            </h3>
            <div className="space-y-2">
              <p>📧 {dictionary.contact.email}</p>
              <p>📱 {dictionary.contact.phone}</p>
              <p>📍 {dictionary.contact.location}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={`/${locale}/kontakt`}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {dictionary.common.getInTouch}
          </a>
        </div>
      </div>
    </div>
  );
}