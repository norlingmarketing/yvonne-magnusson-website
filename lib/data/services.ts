import { Service, ProcessStep } from "@/lib/types";
import { Dictionary } from "@/lib/types/dictionary";

export const getServices = (dict: Dictionary, locale: string): Service[] => [
  {
    id: "styrelsearbete",
    icon: "Users",
    title: dict.services.boardWork,
    description: dict.services.boardWorkDescription,
    features: dict.services.boardWorkFeatures,
    idealFor: dict.services.boardWorkIdealFor,
    approach: dict.services.boardWorkApproach,
    investment: dict.services.boardWorkInvestment,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    href: `/${locale}/tjanster/styrelsearbete`
  },
  {
    id: "senior-advisor",
    icon: "Briefcase",
    title: dict.services.seniorAdvisor,
    description: dict.services.seniorAdvisorDescription,
    features: dict.services.seniorAdvisorFeatures,
    idealFor: dict.services.seniorAdvisorIdealFor,
    approach: dict.services.seniorAdvisorApproach,
    investment: dict.services.seniorAdvisorInvestment,
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    href: `/${locale}/tjanster/senior-advisor`
  },
  {
    id: "interim-ledare",
    icon: "TrendingUp",
    title: dict.services.interimExecutive,
    description: dict.services.interimExecutiveDescription,
    features: dict.services.interimExecutiveFeatures,
    idealFor: dict.services.interimExecutiveIdealFor,
    approach: dict.services.interimExecutiveApproach,
    investment: dict.services.interimExecutiveInvestment,
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    href: `/${locale}/tjanster/interim-ledare`
  },
  {
    id: "workshops",
    icon: "Presentation",
    title: dict.services.workshops,
    description: dict.services.workshopsDescription,
    features: dict.services.workshopsFeatures,
    idealFor: dict.services.workshopsIdealFor,
    approach: dict.services.workshopsApproach,
    investment: dict.services.workshopsInvestment,
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    href: `/${locale}/tjanster/workshops`
  }
];

export const getProcessSteps = (dict: Dictionary): ProcessStep[] => 
  dict.services.processSteps.map(step => ({
    step: step.step,
    title: step.title,
    description: step.description
  }));

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