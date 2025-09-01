import { ContactMethod, ServiceType, ResponsePromise } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

// Swedish contact data
const contactMethodsSv: ContactMethod[] = [
  {
    icon: "Mail",
    title: "E-post",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Skicka meddelande direkt"
  },
  {
    icon: "Phone",
    title: "Telefon",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`,
    description: "Ring för direktkontakt"
  },
  {
    icon: "Users",
    title: "LinkedIn",
    value: siteConfig.social.linkedin.displayName,
    href: siteConfig.social.linkedin.url,
    description: "Professionellt nätverk"
  },
  {
    icon: "MapPin",
    title: "Plats",
    value: siteConfig.contact.location,
    href: "",
    description: "Huvudsakligen nordisk marknad"
  }
];

const serviceTypesSv: ServiceType[] = [
  {
    id: "styrelse",
    icon: "Users",
    title: "Styrelseuppdrag",
    description: "Diskutera styrelseroll eller ordförandeskap"
  },
  {
    id: "interim",
    icon: "TrendingUp", 
    title: "Interim VD/CCO",
    description: "Behov av erfaren interim ledning"
  },
  {
    id: "advisor",
    icon: "Briefcase",
    title: "Senior Advisory",
    description: "Löpande strategisk rådgivning"
  },
  {
    id: "speaking",
    icon: "Presentation",
    title: "Föreläsningar",
    description: "Keynotes och workshops"
  }
];

const responsePromisesSv: ResponsePromise[] = [
  {
    icon: "Clock",
    title: "24 timmar",
    description: "Svar på alla förfrågningar"
  },
  {
    icon: "Calendar",
    title: "Inom en vecka",
    description: "Introduktionssamtal kan bokas"
  },
  {
    icon: "MessageSquare",
    title: "Kostnadsfritt",
    description: "Första samtalet alltid utan kostnad"
  }
];

// English contact data
const contactMethodsEn: ContactMethod[] = [
  {
    icon: "Mail",
    title: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Send message directly"
  },
  {
    icon: "Phone",
    title: "Phone",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`,
    description: "Call for direct contact"
  },
  {
    icon: "Users",
    title: "LinkedIn",
    value: siteConfig.social.linkedin.displayName,
    href: siteConfig.social.linkedin.url,
    description: "Professional network"
  },
  {
    icon: "MapPin",
    title: "Location",
    value: siteConfig.contact.location,
    href: "",
    description: "Primarily Nordic market"
  }
];

const serviceTypesEn: ServiceType[] = [
  {
    id: "board",
    icon: "Users",
    title: "Board Positions",
    description: "Discuss board role or chairmanship"
  },
  {
    id: "interim",
    icon: "TrendingUp", 
    title: "Interim CEO/CCO",
    description: "Need for experienced interim leadership"
  },
  {
    id: "advisor",
    icon: "Briefcase",
    title: "Senior Advisory",
    description: "Ongoing strategic advisory"
  },
  {
    id: "speaking",
    icon: "Presentation",
    title: "Speaking",
    description: "Keynotes and workshops"
  }
];

const responsePromisesEn: ResponsePromise[] = [
  {
    icon: "Clock",
    title: "24 hours",
    description: "Response to all inquiries"
  },
  {
    icon: "Calendar",
    title: "Within a week",
    description: "Introductory meeting can be booked"
  },
  {
    icon: "MessageSquare",
    title: "Free of charge",
    description: "First conversation always at no cost"
  }
];

// Legacy exports for backward compatibility (Swedish)
export const contactMethods: ContactMethod[] = contactMethodsSv;
export const serviceTypes: ServiceType[] = serviceTypesSv;
export const responsePromises: ResponsePromise[] = responsePromisesSv;

// Locale-aware function
export function getContactData(locale: string) {
  if (locale === 'en') {
    return {
      contactMethods: contactMethodsEn,
      serviceTypes: serviceTypesEn,
      responsePromises: responsePromisesEn
    };
  }
  
  return {
    contactMethods: contactMethodsSv,
    serviceTypes: serviceTypesSv,
    responsePromises: responsePromisesSv
  };
}