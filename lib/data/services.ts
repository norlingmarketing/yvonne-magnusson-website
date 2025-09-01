import { Service, ProcessStep } from "@/lib/types";
import { Dictionary } from "@/lib/types/dictionary";
import { type RouteKey } from "@/lib/routes";

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
    route: "boardWork" as RouteKey
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
    route: "seniorAdvisor" as RouteKey
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
    route: "interimExecutive" as RouteKey
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
    route: "workshops" as RouteKey
  }
];

export const getProcessSteps = (dict: Dictionary): ProcessStep[] => 
  dict.services.processSteps.map(step => ({
    step: step.step,
    title: step.title,
    description: step.description
  }));

// Board work specific data - dynamic functions
export const getBoardCompetencies = (dict: Dictionary) => dict.pages.services.boardWork.boardCompetencies;
export const getBoardPositions = (dict: Dictionary) => dict.pages.services.boardWork.boardPositions;
export const getBoardIdealSituations = (dict: Dictionary) => dict.pages.services.boardWork.boardIdealSituations;
export const getBoardValueCreation = (dict: Dictionary) => dict.pages.services.boardWork.boardValueCreation;

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