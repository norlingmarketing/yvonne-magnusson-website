import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Bevisade Transformationsresultat",
  description: "Verkliga framgångshistorier från 30+ transformationsprojekt. 40%+ tillväxt, 15 procentenheter EBITDA-förbättring och beprövade resultat inom retail och FMCG.",
  keywords: [
    "case studies",
    "transformation resultat", 
    "retail turnaround",
    "FMCG transformation",
    "digital transformation cases",
    "framgångshistorier",
    "business transformation",
    "turnaround results",
    "interim VD resultat",
    "retail case studies"
  ],
  openGraph: {
    title: "Case Studies - Bevisade Transformationsresultat | Yvonne Magnusson",
    description: "Verkliga framgångshistorier från 30+ transformationsprojekt med 40%+ tillväxt och beprövade resultat.",
    url: "https://yvonnemagnusson.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}