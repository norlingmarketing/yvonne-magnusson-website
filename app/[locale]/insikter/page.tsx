import type { Metadata } from "next";
import InsightsContent from "./insights-content";

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
};

export default function InsightsPage() {
  return <InsightsContent />;
}