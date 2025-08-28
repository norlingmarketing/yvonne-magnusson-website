"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

interface LocalizedFooterProps {
  dictionary: Dictionary;
  locale: string;
}

const navigation = {
  services: [
    { key: "boardWork", href: "/tjanster/styrelsearbete" },
    { key: "seniorAdvisor", href: "/tjanster/senior-advisor" },
    { key: "interimLeader", href: "/tjanster/interim-ledare" },
    { key: "workshops", href: "/tjanster/workshops" },
  ],
  company: [
    { key: "about", href: "/om-yvonne" },
    { key: "lectures", href: "/forelasningar" },
    { key: "caseStudies", href: "/case-referenser" },
    { key: "insights", href: "/insikter" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yvonnemagnusson/",
      icon: Linkedin,
    },
  ],
};

export function LocalizedFooter({ dictionary, locale }: LocalizedFooterProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-4">{dictionary.company.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {dictionary.company.description}
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-background transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dictionary.footer.services}</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {dictionary.services[item.key as keyof typeof dictionary.services]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dictionary.footer.company}</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {dictionary.navigation[item.key as keyof typeof dictionary.navigation]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dictionary.contact.contactSection}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${dictionary.contact.email}`} className="hover:text-background transition-colors">
                  {dictionary.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${dictionary.contact.phone.replace(/\s+/g, '')}`} className="hover:text-background transition-colors">
                  {dictionary.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{dictionary.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {dictionary.company.name}. {dictionary.common.allRightsReserved}.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href={`/${locale}/kontakt`}
                className="text-sm text-muted-foreground hover:text-background transition-colors"
              >
                {dictionary.common.privacyPolicy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}