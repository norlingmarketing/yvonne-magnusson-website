import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";

interface ContactLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');

  return {
    title: dict.contact.metadata.title,
    description: dict.contact.metadata.description,
    keywords: dict.contact.metadata.keywords,
  };
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <>{children}</>;
}