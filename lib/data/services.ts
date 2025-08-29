import { Users, Briefcase, TrendingUp, Presentation } from "lucide-react";
import { Service, ProcessStep } from "@/lib/types";

export const services: Service[] = [
  {
    id: "styrelsearbete",
    icon: Users,
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
    icon: Briefcase,
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
    icon: TrendingUp,
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
    icon: Presentation,
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