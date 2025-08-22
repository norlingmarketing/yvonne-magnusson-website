import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yvonne Magnusson - Transformation Leadership Expert",
    template: "%s | Yvonne Magnusson"
  },
  description: "Erfaren transformationsledare inom retail och FMCG. Styrelseledamot, interim VD och senior rådgivare med 30+ års beprövad framgång. Specialiserad på turnarounds och digital transformation.",
  keywords: [
    "styrelseledamot",
    "interim VD", 
    "retail transformation",
    "digital transformation",
    "senior rådgivare",
    "keynote speaker",
    "turnaround specialist",
    "FMCG expert",
    "organisationsförändring",
    "ledarskapsexpert",
    "transformation consultant",
    "board member",
    "interim executive",
    "retail strategy"
  ],
  authors: [{ name: "Yvonne Magnusson" }],
  creator: "Yvonne Magnusson",
  publisher: "Yvonne Magnusson",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://yvonnemagnusson.com",
    title: "Yvonne Magnusson - Transformation Leadership Expert",
    description: "Erfaren transformationsledare inom retail och FMCG med 30+ års beprövad framgång inom turnarounds och digital transformation.",
    siteName: "Yvonne Magnusson",
    images: [
      {
        url: "https://yvonnemagnusson.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yvonne Magnusson - Transformation Leadership Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yvonne Magnusson - Transformation Leadership Expert",
    description: "Erfaren transformationsledare inom retail och FMCG med 30+ års beprövad framgång.",
    images: ["https://yvonnemagnusson.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yvonnemagnusson.com",
    languages: {
      'sv-SE': 'https://yvonnemagnusson.com',
      'en-US': 'https://yvonnemagnusson.com/en',
    },
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
