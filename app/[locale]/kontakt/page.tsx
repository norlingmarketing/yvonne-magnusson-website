import { PageHero } from "@/components/page-components/page-hero";
import { ContactForm } from "@/components/page-components/contact-form";
import { ContactMethods } from "@/components/page-components/contact-methods";
import { getContactData } from "@/lib/data/contact";
import { getDictionary } from "@/lib/dictionaries";
import { getIcon } from "@/lib/utils/icon-map";

export default async function ContactPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  const { contactMethods, serviceTypes, responsePromises } = getContactData(locale);
  return (
    <main className="min-h-screen">
      <PageHero
        title={dict.contact.hero.title}
        description={dict.contact.hero.description}
        features={responsePromises.map(promise => {
          const Icon = getIcon(promise.icon);
          return {
            icon: <Icon className="h-5 w-5" />,
            title: promise.title,
            description: promise.description
          };
        })}
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm serviceTypes={serviceTypes} locale={locale} dict={dict} />
            </div>

            {/* Contact Methods */}
            <div>
              <ContactMethods contactMethods={contactMethods} dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}