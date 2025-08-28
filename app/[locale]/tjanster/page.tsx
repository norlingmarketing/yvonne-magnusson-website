import { getDictionary } from '@/lib/dictionaries';
import { isValidLocale } from '@/lib/i18n';

interface ServicesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  const dictionary = await getDictionary(locale);

  const services = [
    {
      key: "boardWork",
      title: dictionary.services.boardWork,
      description: locale === 'sv' 
        ? "Styrelsearbete med fokus på transformation och tillväxt"
        : "Board work focusing on transformation and growth"
    },
    {
      key: "seniorAdvisor",
      title: dictionary.services.seniorAdvisor,
      description: locale === 'sv'
        ? "Strategisk rådgivning för ledare och organisationer"
        : "Strategic advisory for leaders and organizations"
    },
    {
      key: "interimLeader",
      title: dictionary.services.interimLeader,
      description: locale === 'sv'
        ? "Interim ledarskap under transformationsprocesser"
        : "Interim leadership during transformation processes"
    },
    {
      key: "workshops",
      title: dictionary.services.workshops,
      description: locale === 'sv'
        ? "Workshops för ledare och team"
        : "Workshops for leaders and teams"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {dictionary.services.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          {dictionary.services.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.key} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <a
                href={`/${locale}/kontakt`}
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {dictionary.common.learnMore}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`/${locale}/kontakt`}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            {dictionary.common.getInTouch}
          </a>
        </div>
      </div>
    </div>
  );
}