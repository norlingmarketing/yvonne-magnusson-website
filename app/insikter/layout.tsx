import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Perspektiv - Transformation Leadership",
  description: "Djupgående analyser och strategiska perspektiv från 30+ år av transformation inom retail och FMCG. Praktiska råd för ledarskap och organisationsförändring.",
  keywords: [
    "transformation insights",
    "ledarskap artiklar",
    "retail strategi",
    "digital transformation",
    "organisationsförändring",
    "business insights",
    "transformation tips",
    "leadership articles",
    "retail trends",
    "FMCG insights"
  ],
  openGraph: {
    title: "Insights & Perspektiv - Transformation Leadership | Yvonne Magnusson",
    description: "Djupgående analyser och strategiska perspektiv från 30+ år av transformation inom retail och FMCG.",
    url: "https://yvonnemagnusson.com/insikter",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}