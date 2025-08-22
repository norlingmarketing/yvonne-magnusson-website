import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yvonne Magnusson - Transformation Leadership",
  description: "Leading transformation specialist in retail and consumer markets. Board member, interim executive, and strategic advisor with 30+ years experience.",
  keywords: "styrelseledamot, interim VD, retail transformation, digital transformation, senior advisor, keynote speaker",
  authors: [{ name: "Yvonne Magnusson" }],
  openGraph: {
    title: "Yvonne Magnusson - Transformation Leadership",
    description: "Leading transformation specialist in retail and consumer markets",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
