import { TimelineItem, CurrentRole } from "@/lib/types";

export const timelineData: TimelineItem[] = [
  {
    year: "2023-2024",
    title: "VD",
    company: "Indiska 1901 AB",
    description: "Ledde omstart efter konkurs och skapade fundamental stabilitet för framtida tillväxt.",
    achievements: [
      "Ny omnikanal-affärsmodell definierad",
      "Halverade förlust första verksamhetsåret",
      "Öppnade två nya butiker (Väla och Frölunda Torg)",
      "Implementerade ERP-system (BC) och Power BI"
    ]
  },
  {
    year: "2020-2023",
    title: "Interim VD",
    company: "Insulas verksamheter i Sverige (Marenor och Fiskeriet)",
    description: "Genomförde stort turnaround-program för 2 miljarder SEK-verksamhet.",
    achievements: [
      "Marenor AB uppvisade +7,2 MSEK EBIT 2021",
      "Förbättring från -40 MSEK till positivt resultat",
      "Avveckling och optimering av produktionsenheter",
      "Implementering av gemensam affärs- och driftsmodell"
    ]
  },
  {
    year: "2018-2020", 
    title: "Interim VD",
    company: "Departments & Stores Europe AB (del av RnB)",
    description: "Stabiliserade kärnverksamheten och vände e-handelssatsningen till lönsamhet.",
    achievements: [
      "DSE AB redovisade +15 MSEK EBIT december 2019",
      "Manofakind.se turnaround från -15 MSEK till break-even",
      "Framgångsrika hyres- och leverantörsförhandlingar",
      "Omorganisation med 3,5 MSEK årlig besparing"
    ]
  },
  {
    year: "2017-2018",
    title: "Managing Director",
    company: "BTT Sverige/Kesko (K Rauta AB och Onninen AB)",
    description: "Utvecklade affärsmodell för 4 miljarder SEK verksamhet och 1300 anställda.",
    achievements: [
      "Konsolidering av grossist- och detaljhandelsmodellen",
      "Lansering av e-handelsplattform för Onninen AB",
      "Bidrag till M&A-aktiviteter svenska marknaden"
    ]
  },
  {
    year: "2011-2016",
    title: "VD", 
    company: "Cervera AB",
    description: "Genomförde turnaround från -30 MSEK förlust till över +17 MSEK resultat på 4 år.",
    achievements: [
      "Förändring från frivillig fackhandel till helintegrerad detaljhandel",
      "Lanserade e-handel och omnikanal-lösningar",
      "Centrallager, distribution och centrala leverantörsförhandlingar",
      "Framgångsrik exit till Accent Private Equity"
    ]
  },
  {
    year: "2007-2011",
    title: "Managing Director",
    company: "Villeroy&Boch Tableware Nordic & Baltics",
    description: "Ledde transformation från decentraliserad till centraliserad modell över 8 länder.",
    achievements: [
      "Försäljningen ökade med 40%",
      "200% resultatförbättring genom kostnadsbesparingar",
      "Fokus på egna butiker och e-handel som distributionskanaler"
    ]
  }
];

export const currentRoles: CurrentRole[] = [
  {
    icon: "Users",
    title: "Styrelseordförande",
    companies: ["MAIA Universe", "Waynes Coffee Sweden AB", "IWF"],
  },
  {
    icon: "Briefcase",
    title: "Styrelseledamot",
    companies: ["Bio-Restore", "DI Close"],
  },
  {
    icon: "Globe",
    title: "Senior Advisor",
    companies: ["IAMRUNBOX"],
  }
];

export const expertise = [
  "Change Management",
  "Cultural Transformation", 
  "Digital Transformation",
  "Business Modelling",
  "Internationalisering",
  "Turnaround Management",
  "Retail Excellence",
  "Omnichannel Strategy",
  "M&A Integration",
  "Team Leadership"
];

export const languages = [
  { lang: "Svenska", level: "Modersmål" },
  { lang: "Engelska", level: "Flytande" },
  { lang: "Tyska", level: "Goda kunskaper" }
];