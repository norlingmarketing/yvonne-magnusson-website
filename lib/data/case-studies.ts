import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    title: "Retailkedjan - Från Kris till Marknadsledare",
    company: "Nordisk Retailkedja",
    industry: "Fashion Retail", 
    duration: "18 månader",
    role: "Interim VD",
    challenge: "Fallande försäljning, föråldrade processer och låg personalengagemang hotade företagets överlevnad.",
    solution: [
      "Genomförde omfattande organisationsanalys och kulturförändringsprogram",
      "Implementerade ny digital strategi och e-handelsplattform", 
      "Rekryterade nyckeltalanger och utvecklade befintlig personal",
      "Optimerade supply chain och kostnadsstruktur"
    ],
    results: [
      { metric: "Omsättning", value: "+47%", description: "Ökning under 18 månader" },
      { metric: "Lönsamhet", value: "12%", description: "EBITDA-marginal från -3%" },
      { metric: "Medarbetarengagemang", value: "+65%", description: "NPS förbättring" },
      { metric: "Marknadsandelar", value: "+8%", description: "I strategiska segment" }
    ],
    testimonial: "Yvonne vänte hela vår organisation på 18 månader. Hennes kombination av strategiskt tänkande och praktisk genomförandekraft var avgörande för vår framgång.",
    author: "Styrelseordförande"
  },
  {
    title: "FMCG-Transformation i Nordeuropa",
    company: "Europeisk FMCG-distributör",
    industry: "Food & Beverage",
    duration: "24 månader", 
    role: "Senior Rådgivare",
    challenge: "Fragmenterad marknadsposition, ineffektiv distribution och utmanande konkurrens från nya aktörer.",
    solution: [
      "Utvecklade ny go-to-market strategi för nyckelkategorier",
      "Konsoliderade distributionsnätverk och optimerade logistik",
      "Implementerade customer-centric organisation och processer",
      "Etablerade strategiska partnerskap med nyckelkunder"
    ],
    results: [
      { metric: "Marknadstillväxt", value: "+23%", description: "I strategiska kategorier" },
      { metric: "Operativ effektivitet", value: "+31%", description: "Kostnadsreduktion" },
      { metric: "Kundnöjdhet", value: "8.7/10", description: "Från 6.2/10" },
      { metric: "ROI", value: "340%", description: "På investeringarna" }
    ],
    testimonial: "Yvonnes djupa förståelse för FMCG-marknaden och förmåga att driva komplexa förändringar hjälpte oss att återta marknadsledarskapet.",
    author: "VD"
  },
  {
    title: "Digital Transformation & Tillväxt",
    company: "Traditionell Återförsäljare",
    industry: "Home & Garden",
    duration: "12 månader",
    role: "Interimchef Digital Transformation", 
    challenge: "Behov av snabb digitalisering för att möta förändrade konsumentbeteenden och e-handelskonkurrens.",
    solution: [
      "Implementerade omnichannel-strategi och unified commerce",
      "Byggde digital kompetens genom rekrytering och utbildning",
      "Lanserade ny e-handelsplattform och mobilapp",
      "Utvecklade data-driven beslutsstöd och personalisering"
    ],
    results: [
      { metric: "Digital omsättning", value: "+156%", description: "Online tillväxt" },
      { metric: "Omnichannel-kunder", value: "+89%", description: "Cross-channel engagement" },
      { metric: "Konvertering", value: "+43%", description: "E-handel optimering" },
      { metric: "NPS", value: "+52", description: "Kundupplevelse förbättring" }
    ],
    testimonial: "Yvonne ledde vår digitala transformation med imponerande resultat. Hon förstod både den tekniska och mänskliga sidan av förändringen.",
    author: "Styrelseledamot"
  }
];

export const impactAreasData = [
  {
    title: "Tillväxt & Lönsamhet",
    description: "Genomsnittlig omsättningstillväxt på 40%+ och förbättrad EBITDA-marginal med 8-15 procentenheter",
    metrics: ["12 framgångsrika cases"],
    iconName: "TrendingUp"
  },
  {
    title: "Organisationsförändring", 
    description: "Kulturförändringar som resulterat i 50%+ förbättring av medarbetarengagemang och retention",
    metrics: ["8 transformationer"],
    iconName: "Users"
  },
  {
    title: "Marknadsposition",
    description: "Stärkt marknadsposition med genomsnittlig ökning av marknadsandelar på 15-25%",
    metrics: ["10 turnarounds"],
    iconName: "Target"
  },
  {
    title: "Digital Transformation",
    description: "Framgångsrik digitalisering med 100%+ tillväxt av digital omsättning inom 12-18 månader", 
    metrics: ["6 digitaliseringar"],
    iconName: "Zap"
  }
];

export const overallStats = [
  { value: 30, label: "Case studier genomförda", suffix: "+" },
  { value: 40, label: "Genomsnittlig omsättningstillväxt", suffix: "%+" },
  { value: 15, label: "EBITDA-förbättring", suffix: " pp" },
  { value: 2.5, label: "Miljarder SEK transformerat värde", suffix: " Mdr" }
];