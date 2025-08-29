import type { Metadata } from "next";
import { PageHero } from "@/components/page-components/page-hero";
import { ContactForm } from "@/components/page-components/contact-form";
import { ContactMethods } from "@/components/page-components/contact-methods";
import { contactMethods, serviceTypes, responsePromises } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Kontakt - Yvonne Magnusson | Boka introduktionssamtal",
  description: "Kontakta Yvonne Magnusson för styrelseuppdrag, interim VD-roller, senior advisory eller föreläsningar. Kostnadsfritt introduktionssamtal.",
  keywords: "kontakt, Yvonne Magnusson, styrelseledamot, interim VD, senior advisor, föreläsningar, retail transformation",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Låt oss börja samtalet"
        description="Är ni redo att accelerera er transformation? Jag hjälper gärna till att diskutera era utmaningar och möjligheter för att hitta den bästa vägen framåt."
        features={responsePromises.map(promise => ({
          icon: <promise.icon className="h-5 w-5" />,
          title: promise.title,
          description: promise.description
        }))}
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm serviceTypes={serviceTypes} />
            </div>

            {/* Contact Methods */}
            <div>
              <ContactMethods contactMethods={contactMethods} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}