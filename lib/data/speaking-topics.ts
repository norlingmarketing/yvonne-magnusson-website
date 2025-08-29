import { SpeakingTopic } from "@/lib/types";

export const speakingTopics: SpeakingTopic[] = [
  {
    id: "digital-transformation",
    title: "Transformation i den digitala eran",
    subtitle: "Beyond the Buzzwords",
    description: "Vad händer verkligen när digitaliseringen förändrar allt? En ärlig genomgång av utmaningar, möjligheter och konsekvenser som sällan diskuteras.",
    keyPoints: [
      "Digitaliseringens verkliga påverkan på organisationer",
      "Kulturell transformation - den glömda komponenten",
      "Ledarskap när allt förändras samtidigt",
      "Praktiska verktyg för att navigera förändringen"
    ],
    audience: [
      "VD:ar och ledningsgrupper",
      "Styrelser som driver digital transformation",
      "HR-chefer och förändringsagenter",
      "Retail- och FMCG-ledare"
    ],
    duration: "30-60 minuter + Q&A",
    format: ["Keynote", "Workshop", "Paneldiskussion"],
    videoThumbnail: "/api/placeholder/600/400",
    testimonial: {
      quote: "Yvonnes föreläsning om digital transformation gav oss verktyg vi fortfarande använder två år senare.",
      author: "CEO, Fashion Retail Group",
      company: "Nordisk retailkedja"
    }
  },
  {
    id: "internationalization",
    title: "Internationalisering",
    subtitle: "From Nordic Success to Global Growth", 
    description: "Strategier, fallgropar och framgångsfaktorer för expansion på nya marknader. Baserat på praktisk erfarenhet av att bygga verksamhet i 8+ länder.",
    keyPoints: [
      "Marknadsetablering - vad som verkligen fungerar",
      "Kulturell anpassning utan att förlora identitet",
      "Partnerskap vs egen etablering",
      "Att bygga internationella team och ledarskap"
    ],
    audience: [
      "Tillväxtföretag med expansionsplaner",
      "Internationella koncerner",
      "Investare och private equity",
      "Export- och handelsorganisationer"
    ],
    duration: "45-60 minuter + Q&A",
    format: ["Keynote", "Masterclass", "Executive briefing"],
    videoThumbnail: "/api/placeholder/600/400",
    testimonial: {
      quote: "Konkret och actionable insights från någon som verkligen har gjort det själv.",
      author: "COO, Tech Scale-up",
      company: "B2C-företag"
    }
  },
  {
    id: "retail-experience",
    title: "Retail in the Age of Experience",
    subtitle: "From Transaction to Transformation",
    description: "Hur skapar man lojalitet och relevans när konsumenten har oändliga val? Om att bygga relationer i en transaktionsdriven värld.",
    keyPoints: [
      "Från produkt till upplevelse - praktiska exempel",
      "Omnichannel som verkligen fungerar",
      "Data-driven personalisering utan att tappa human touch",
      "Byggande av community och brand loyalty"
    ],
    audience: [
      "Retail-ledare och store managers",
      "E-handelschefer och digital teams",
      "Brand managers och marknadsförare",
      "Consumer goods companies"
    ],
    duration: "30-90 minuter (flexibelt)",
    format: ["Keynote", "Interactive session", "Case study workshop"],
    videoThumbnail: "/api/placeholder/600/400",
    testimonial: {
      quote: "Äntligen någon som förstår både den digitala och fysiska retailupplevelsen.",
      author: "CMO, Lifestyle Brand",
      company: "Omnichannel retailer"
    }
  }
];

export interface SpeakingFormat {
  format: string;
  duration: string;
  description: string;
  pricing: string;
  includes: string[];
}

export const speakingFormats: SpeakingFormat[] = [
  {
    format: "Keynote",
    duration: "30-60 minuter",
    description: "Inspirerande huvudtal som sätter ton för eventet",
    pricing: "Enligt offert",
    includes: ["Förarbete med eventteam", "Skräddarsytt innehåll", "Q&A-session", "Uppföljning"]
  },
  {
    format: "Workshop/Masterclass",
    duration: "2-4 timmar",
    description: "Interaktiva sessions med konkreta verktyg och övningar",
    pricing: "Enligt offert",
    includes: ["Materialpaket", "Gruppövningar", "Handlingsplan", "30-dagars email-support"]
  },
  {
    format: "Executive Briefing",
    duration: "90 minuter",
    description: "Djupgående sessions för ledningsgrupper och styrelser",
    pricing: "Enligt offert",
    includes: ["Konfidentiell diskussion", "Branschspecifik analys", "Strategic insights", "Follow-up call"]
  }
];

export interface PastEvent {
  event: string;
  location: string;
  audience: string;
  topic: string;
}

export const pastEvents: PastEvent[] = [
  {
    event: "Retail Tech Summit 2024",
    location: "Stockholm",
    audience: "300+ retail executives",
    topic: "Digital Transformation in Retail"
  },
  {
    event: "Fashion Industry Summit 2025",
    location: "Copenhagen",
    audience: "200+ fashion leaders",
    topic: "Sustainable Growth Through Innovation"
  },
  {
    event: "FMCG Leaders Forum",
    location: "Helsinki",
    audience: "150+ FMCG executives",
    topic: "Market Expansion Strategies"
  }
];