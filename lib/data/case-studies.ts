import { CaseStudy } from "@/lib/types";

const caseStudiesSv: CaseStudy[] = [
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

const caseStudiesEn: CaseStudy[] = [
  {
    title: "Retail Chain - From Crisis to Market Leader",
    company: "Nordic Retail Chain",
    industry: "Fashion Retail",
    duration: "18 months",
    role: "Interim CEO",
    challenge: "Declining sales, outdated processes, and low employee engagement threatened the company's survival.",
    solution: [
      "Conducted comprehensive organizational analysis and cultural change program",
      "Implemented new digital strategy and e-commerce platform",
      "Recruited key talents and developed existing staff",
      "Optimized supply chain and cost structure"
    ],
    results: [
      { metric: "Revenue", value: "+47%", description: "Growth over 18 months" },
      { metric: "Profitability", value: "12%", description: "EBITDA margin from -3%" },
      { metric: "Employee Engagement", value: "+65%", description: "NPS improvement" },
      { metric: "Market Share", value: "+8%", description: "In strategic segments" }
    ],
    testimonial: "Yvonne turned our entire organization around in 18 months. Her combination of strategic thinking and practical execution power was crucial to our success.",
    author: "Chairman of the Board"
  },
  {
    title: "FMCG Transformation in Northern Europe",
    company: "European FMCG Distributor",
    industry: "Food & Beverage",
    duration: "24 months",
    role: "Senior Advisor",
    challenge: "Fragmented market position, inefficient distribution, and challenging competition from new players.",
    solution: [
      "Developed new go-to-market strategy for key categories",
      "Consolidated distribution network and optimized logistics",
      "Implemented customer-centric organization and processes",
      "Established strategic partnerships with key customers"
    ],
    results: [
      { metric: "Market Growth", value: "+23%", description: "In strategic categories" },
      { metric: "Operational Efficiency", value: "+31%", description: "Cost reduction" },
      { metric: "Customer Satisfaction", value: "8.7/10", description: "From 6.2/10" },
      { metric: "ROI", value: "340%", description: "On investments" }
    ],
    testimonial: "Yvonne's deep understanding of the FMCG market and ability to drive complex changes helped us regain market leadership.",
    author: "CEO"
  },
  {
    title: "Digital Transformation & Growth",
    company: "Traditional Retailer",
    industry: "Home & Garden",
    duration: "12 months",
    role: "Interim Head of Digital Transformation",
    challenge: "Need for rapid digitalization to meet changing consumer behaviors and e-commerce competition.",
    solution: [
      "Implemented omnichannel strategy and unified commerce",
      "Built digital competence through recruitment and training",
      "Launched new e-commerce platform and mobile app",
      "Developed data-driven decision support and personalization"
    ],
    results: [
      { metric: "Digital Revenue", value: "+156%", description: "Online growth" },
      { metric: "Omnichannel Customers", value: "+89%", description: "Cross-channel engagement" },
      { metric: "Conversion", value: "+43%", description: "E-commerce optimization" },
      { metric: "NPS", value: "+52", description: "Customer experience improvement" }
    ],
    testimonial: "Yvonne led our digital transformation with impressive results. She understood both the technical and human side of change.",
    author: "Board Member"
  }
];

const impactAreasDataSv = [
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

const impactAreasDataEn = [
  {
    title: "Growth & Profitability",
    description: "Average revenue growth of 40%+ and improved EBITDA margin by 8-15 percentage points",
    metrics: ["12 successful cases"],
    iconName: "TrendingUp"
  },
  {
    title: "Organizational Change",
    description: "Cultural changes resulting in 50%+ improvement in employee engagement and retention",
    metrics: ["8 transformations"],
    iconName: "Users"
  },
  {
    title: "Market Position",
    description: "Strengthened market position with average increase in market share of 15-25%",
    metrics: ["10 turnarounds"],
    iconName: "Target"
  },
  {
    title: "Digital Transformation",
    description: "Successful digitalization with 100%+ growth in digital revenue within 12-18 months",
    metrics: ["6 digitalizations"],
    iconName: "Zap"
  }
];

const overallStatsSv = [
  { value: 30, label: "Case studier genomförda", suffix: "+" },
  { value: 40, label: "Genomsnittlig omsättningstillväxt", suffix: "%+" },
  { value: 15, label: "EBITDA-förbättring", suffix: " pp" },
  { value: 2.5, label: "Miljarder SEK transformerat värde", suffix: " Mdr" }
];

const overallStatsEn = [
  { value: 30, label: "Case studies completed", suffix: "+" },
  { value: 40, label: "Average revenue growth", suffix: "%+" },
  { value: 15, label: "EBITDA improvement", suffix: " pp" },
  { value: 2.5, label: "Billion SEK value transformed", suffix: " Bn" }
];

const industriesSv = [
  { name: "Fashion & Lifestyle", cases: 8, icon: "👔" },
  { name: "Food & Beverage", cases: 6, icon: "🍽️" },
  { name: "Home & Garden", cases: 4, icon: "🏠" },
  { name: "Electronics & Tech", cases: 3, icon: "💻" },
  { name: "Health & Beauty", cases: 5, icon: "💄" },
  { name: "Sports & Outdoor", cases: 4, icon: "⛷️" }
];

const industriesEn = [
  { name: "Fashion & Lifestyle", cases: 8, icon: "👔" },
  { name: "Food & Beverage", cases: 6, icon: "🍽️" },
  { name: "Home & Garden", cases: 4, icon: "🏠" },
  { name: "Electronics & Tech", cases: 3, icon: "💻" },
  { name: "Health & Beauty", cases: 5, icon: "💄" },
  { name: "Sports & Outdoor", cases: 4, icon: "⛷️" }
];

// Export functions that return locale-aware data
export const getCaseStudies = (locale: string) => {
  return locale === 'sv' ? caseStudiesSv : caseStudiesEn;
};

export const getImpactAreasData = (locale: string) => {
  return locale === 'sv' ? impactAreasDataSv : impactAreasDataEn;
};

export const getOverallStats = (locale: string) => {
  return locale === 'sv' ? overallStatsSv : overallStatsEn;
};

export const getIndustries = (locale: string) => {
  return locale === 'sv' ? industriesSv : industriesEn;
};

// Legacy exports for backward compatibility (defaults to Swedish)
export const caseStudies = caseStudiesSv;
export const impactAreasData = impactAreasDataSv;
export const overallStats = overallStatsSv;
export const industries = industriesSv;