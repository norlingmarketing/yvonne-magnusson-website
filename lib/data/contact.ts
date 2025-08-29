import { ContactMethod, ServiceType, ResponsePromise } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

export const contactMethods: ContactMethod[] = [
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

export const serviceTypes: ServiceType[] = [
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

export const responsePromises: ResponsePromise[] = [
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