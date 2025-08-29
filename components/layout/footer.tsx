"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getIcon, IconName } from "@/lib/utils/icon-map";

const navigation = {
  services: [
    { name: "Styrelsearbete", href: "/tjanster/styrelsearbete" },
    { name: "Senior Advisor", href: "/tjanster/senior-advisor" },
    { name: "Interimledare", href: "/tjanster/interim-ledare" },
    { name: "Workshops", href: "/tjanster/workshops" },
  ],
  company: [
    { name: "Om Yvonne", href: "/om-yvonne" },
    { name: "Föreläsningar", href: "/forelasningar" },
    { name: "Case & Referenser", href: "/case-referenser" },
    { name: "Insikter", href: "/insikter" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: siteConfig.social.linkedin.url,
      icon: "Linkedin" as IconName,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-4">{siteConfig.company.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {siteConfig.company.description}
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = getIcon(item.icon);
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
            <h3 className="text-lg font-semibold mb-4">Tjänster</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Företag</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                {(() => { const MailIcon = getIcon("Mail"); return <MailIcon className="h-4 w-4 flex-shrink-0" />; })()}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-background transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                {(() => { const PhoneIcon = getIcon("Phone"); return <PhoneIcon className="h-4 w-4 flex-shrink-0" />; })()}
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-background transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                {(() => { const MapPinIcon = getIcon("MapPin"); return <MapPinIcon className="h-4 w-4 flex-shrink-0" />; })()}
                <span>{siteConfig.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yvonne Magnusson. Alla rättigheter förbehållna.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href="/kontakt"
                className="text-sm text-muted-foreground hover:text-background transition-colors"
              >
                Integritetspolicy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}