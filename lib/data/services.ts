import { Service, ProcessStep } from "@/lib/types";

export const services: Service[] = [
  {
    id: "styrelsearbete",
    icon: "Users",
    title: "Styrelsearbete",
    description: "Kommersiell skärpa och strategiskt fokus för styrelser i transformationsresor och internationalisering.",
    features: [
      "Internationalisering och digitalisering",
      "Kulturell transformation",
      "Strategisk riktning och uppsikt",
      "Risk- och möjlighetsanalys",
      "M&A-processer och integration"
    ],
    idealFor: [
      "Retail- och FMCG-företag",
      "Företag i transformationsfas", 
      "Internationell expansion",
      "Digital omställning"
    ],
    approach: "Löpande styrelsearbete med djup branschkunskap och fokus på långsiktig värdeskapning.",
    investment: "Enligt styrelsearvodering och tidsåtgång",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    href: "/tjanster/styrelsearbete"
  },
  {
    id: "senior-advisor",
    icon: "Briefcase",
    title: "Senior Advisor",
    description: "Löpande rådgivning för ledningsgrupper och ägare inom retail och consumer markets.",
    features: [
      "2-3 dagar/månad engagement",
      "Strategisk sparring och vägledning",
      "Retail & Consumer expertis",
      "Nätverk och branschkontakter",
      "Implementeringsstöd"
    ],
    idealFor: [
      "Tillväxtföretag inom retail",
      "Ledningsgrupper som behöver branschexpertis",
      "Företag med expansionsplaner",
      "Ägare som söker strategisk rådgivning"
    ],
    approach: "Månatligt engagement med regelbunden kontakt och strategiska genomgångar.",
    investment: "Fast månadsarvode baserat på omfattning",
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    href: "/tjanster/senior-advisor"
  },
  {
    id: "interim-ledare",
    icon: "TrendingUp",
    title: "Interimledare",
    description: "VD/CCO roller vid behov av förändring, turnaround eller tillväxtresa med fokus på snabba resultat.",
    features: [
      "Snabb analys och mobilisering",
      "Fokus på KPI-leverans",
      "Erfaren turnaround-specialist",
      "Team-motivering och utveckling",
      "Strukturerad överlämning"
    ],
    idealFor: [
      "Företag i kris eller turnaround",
      "Tillväxtföretag som behöver erfaren ledning",
      "Ägarbyten eller övergångssituationer",
      "Företag med operativa utmaningar"
    ],
    approach: "3-18 månaders uppdrag med tydliga mål och löpande uppföljning.",
    investment: "Månadsarvode + prestationsbaserad bonus",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    href: "/tjanster/interim-ledare"
  },
  {
    id: "workshops",
    icon: "Presentation",
    title: "Workshops",
    description: "Skräddarsydda workshops för strategisk utveckling och transformation med konkreta utfall.",
    features: [
      "Retail Experience Sprint",
      "International Readiness Assessment", 
      "Business Model Innovation",
      "Digital Transformation Roadmap",
      "Konkret handlingsplan"
    ],
    idealFor: [
      "Ledningsgrupper som behöver strategisk klarhet",
      "Företag som planerar expansion",
      "Team som ska genomföra transformation",
      "Styrelser som behöver djupare förståelse"
    ],
    approach: "1-2 dagars intensiva workshops med förarbete och uppföljning.",
    investment: "Fast pris per workshop inkl. material och uppföljning",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    href: "/tjanster/workshops"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Första samtalet",
    description: "Kostnadsfritt 15-30 minuters samtal för att förstå era behov och utmaningar."
  },
  {
    step: "02", 
    title: "Behovsanalys",
    description: "Djupare genomgång av situation, mål och förutsättningar för att skräddarsy lösningen."
  },
  {
    step: "03",
    title: "Förslag & planering",
    description: "Konkret förslag på upplägg, tidsplan och investering baserat på era specifika behov."
  },
  {
    step: "04",
    title: "Genomförande",
    description: "Strukturerat genomförande med löpande kommunikation och anpassning efter behov."
  }
];

// Board work specific data
export const boardCompetencies = [
  {
    icon: "Globe",
    title: "Internationalisering",
    description: "Djup erfarenhet av expansion till nordiska och globala marknader",
    details: [
      "Marknadsetablering i nya länder",
      "Kulturell anpassning och lokalisering", 
      "Partnerskap och joint ventures",
      "Regulatory compliance internationellt"
    ]
  },
  {
    icon: "TrendingUp",
    title: "Digital Transformation",
    description: "Proven track record av digital omställning och teknisk utveckling",
    details: [
      "E-handel och omnikanal-strategier",
      "Digital infrastruktur och system",
      "Data-driven beslutsfattande",
      "Teknisk innovation och automation"
    ]
  },
  {
    icon: "Target",
    title: "Strategisk Utveckling",
    description: "Långsiktig strategiutveckling med fokus på hållbar tillväxt",
    details: [
      "Affärsmodells-innovation",
      "Marknadsstrategi och positioning",
      "M&A och tillväxtinitiativ",
      "Risk- och möjlighetsanalys"
    ]
  },
  {
    icon: "Users",
    title: "Kulturell Transformation",
    description: "Ledarskap i organisatorisk förändring och kulturutveckling",
    details: [
      "Change management processer",
      "Ledarskaps- och teamutveckling",
      "Kommunikation och förankring",
      "Performance management"
    ]
  }
];

export const boardPositions = [
  {
    role: "Styrelseordförande",
    companies: [
      { name: "MAIA Universe", description: "Tech startup inom AI och hållbarhet" },
      { name: "Waynes Coffee Sweden AB", description: "Ledande kaffekedja i Sverige" },
      { name: "IWF", description: "International Women's Forum" }
    ]
  },
  {
    role: "Styrelseledamot", 
    companies: [
      { name: "Bio-Restore", description: "Bioteknikföretag inom miljölösningar" },
      { name: "DI Close", description: "Nätverk för kvinnliga ledare" }
    ]
  }
];

export const boardIdealSituations = [
  {
    title: "Transformationsresor",
    description: "Företag som genomgår större förändringar inom digitalisering, affärsmodell eller marknadsstrategi.",
    examples: ["Digital transformation", "Affärsmodells-innovation", "Kulturförändring"]
  },
  {
    title: "Internationell expansion", 
    description: "Bolag som planerar eller genomför etablering på nya marknader, särskilt inom Norden.",
    examples: ["Marknadsetablering", "Joint ventures", "Kulturell anpassning"]
  },
  {
    title: "Tillväxt och skalning",
    description: "Företag i tillväxtfas som behöver erfaren ledning för att hantera komplexitet och risk.",
    examples: ["Skalning av verksamhet", "Systemuppbyggnad", "Teamutveckling"]
  },
  {
    title: "Krissituationer",
    description: "Bolag som behöver erfaren krishantering och turnaround-expertis för att vända utvecklingen.",
    examples: ["Turnaround management", "Stakeholder management", "Operativ effektivisering"]
  }
];

export const boardValueCreation = [
  {
    area: "Strategisk riktning",
    impact: "Tydlig långsiktig strategi med konkreta milstolpar och mätbara mål"
  },
  {
    area: "Risk management",
    impact: "Strukturerad riskanalys och förebyggande åtgärder baserat på praktisk erfarenhet"
  },
  {
    area: "Branschexpertis",
    impact: "Djup förståelse för retail och FMCG med nätverk och marknadskännedom"
  },
  {
    area: "Genomförandekraft",
    impact: "Praktisk erfarenhet av att omsätta strategi till handling och resultat"
  }
];

// Senior advisor specific data
export const seniorAdvisorExpertise = [
  {
    icon: "TrendingUp",
    title: "Transformation & Tillväxt",
    description: "Strategisk vägledning för organisationsförändringar och tillväxtinitiativ baserat på 30+ års branschexpertis."
  },
  {
    icon: "Users",
    title: "Ledarskaps- & Organisationsutveckling", 
    description: "Utveckla ledarskapskraft och bygga högpresterande team genom beprövade metoder och praktisk erfarenhet."
  },
  {
    icon: "Target",
    title: "Strategi & Verkställighet",
    description: "Från strategi till resultat - säkerställ framgångsrik implementering av affärskritiska initiativ."
  },
  {
    icon: "Lightbulb",
    title: "Innovation & Digitalisering",
    description: "Navigera den digitala transformationen och skapa innovativa affärsmodeller för framtidens utmaningar."
  }
];

export const seniorAdvisorValueProp = [
  {
    icon: "Shield",
    title: "Beprövad Expertis",
    description: "30+ år av framgångsrik ledarskap inom retail och FMCG, inklusive 18 år som VD."
  },
  {
    icon: "Award",
    title: "Resultatfokus",
    description: "Dokumenterad track record av framgångsrika transformationer och verksamhetsförbättringar."
  },
  {
    icon: "Users",
    title: "Praktisk Approach",
    description: "Hands-on rådgivning baserad på verklig branschexpertis och operativ erfarenhet."
  }
];

export const seniorAdvisorEngagementTypes = [
  {
    title: "Strategisk Rådgivning",
    description: "Löpande strategisk support för VD och ledningsgrupp",
    duration: "3-12 månader",
    format: "Månatliga workshops och ad-hoc konsultationer"
  },
  {
    title: "Projektspecifik Rådgivning",
    description: "Expertis för specifika transformationsprojekt",
    duration: "1-6 månader", 
    format: "Veckovisa sessioner och milstolpsgenomgångar"
  },
  {
    title: "Board Advisory",
    description: "Rådgivning till styrelse och styrelseordförande",
    duration: "6-24 månader",
    format: "Styrelsemöten och strategisessioner"
  }
];