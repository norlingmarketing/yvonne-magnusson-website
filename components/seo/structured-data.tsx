export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yvonne Magnusson",
    "jobTitle": "Transformation Leadership Expert",
    "description": "Erfaren transformationsledare inom retail och FMCG med 30+ års beprövad framgång inom turnarounds och digital transformation.",
    "url": "https://yvonnemagnusson.com",
    "sameAs": [
      "https://www.linkedin.com/in/yvonnemagnusson/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Yvonne Magnusson Consulting"
    },
    "knowsAbout": [
      "Retail Transformation",
      "Digital Transformation", 
      "Board Leadership",
      "Interim Executive",
      "Turnaround Management",
      "FMCG Strategy",
      "Keynote Speaking"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Board Member Experience",
        "description": "8+ board appointments completed"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "CEO Experience",
        "description": "18 years as CEO and leader"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Turnaround Specialist",
        "description": "4 successful turnarounds completed"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Yvonne Magnusson Consulting",
    "founder": "Yvonne Magnusson",
    "description": "Professional transformation leadership services specializing in retail and FMCG sectors",
    "url": "https://yvonnemagnusson.com",
    "telephone": "+46739853260",
    "email": "info@yvonnemagnusson.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SE",
      "addressLocality": "Stockholm"
    },
    "areaServed": [
      "Sweden",
      "Nordic Region",
      "Europe"
    ],
    "serviceType": [
      "Board Consulting",
      "Senior Advisory",
      "Interim Executive",
      "Keynote Speaking",
      "Workshops"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transformation Leadership Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Styrelsearbete",
            "description": "Kommersiell skärpa och strategiskt fokus för styrelser i transformationsresor"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Senior Advisor",
            "description": "Löpande rådgivning för ledningsgrupper och ägare inom retail och consumer"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interimledare", 
            "description": "VD/CCO roller vid behov av förändring, turnaround eller tillväxtresa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workshops",
            "description": "Skräddarsydda workshops för strategisk utveckling och transformation"
          }
        }
      ]
    }
  };

  const speakerSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://yvonnemagnusson.com#speaker",
    "name": "Yvonne Magnusson",
    "jobTitle": "Keynote Speaker",
    "description": "International keynote speaker specializing in transformation leadership and digital transformation",
    "performerIn": [
      {
        "@type": "Event",
        "name": "Leaders of Trade Copenhagen",
        "startDate": "2025-09",
        "location": "Copenhagen"
      },
      {
        "@type": "Event", 
        "name": "Fashion Industry Summit",
        "startDate": "2025",
        "location": "Stockholm"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakerSchema)
        }}
      />
    </>
  );
}