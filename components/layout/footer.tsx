"use client";

import { LocalizedLink } from "@/components/localized-link";
import { siteConfig } from "@/lib/site-config";
import { getIcon, IconName } from "@/lib/utils/icon-map";
import { Dictionary } from "@/lib/types/dictionary";
import { type Locale } from "@/lib/routes";

interface FooterProps {
  locale: string;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {

  const navigation = {
    services: [
      { name: dict.services.boardWork, route: 'boardWork' as const },
      { name: dict.services.seniorAdvisor, route: 'seniorAdvisor' as const },
      { name: dict.services.interimExecutive, route: 'interimExecutive' as const },
      { name: dict.services.workshops, route: 'workshops' as const },
    ],
    company: [
      { name: dict.navigation.about, route: 'about' as const },
      { name: dict.navigation.speaking, route: 'speaking' as const },
      { name: dict.navigation.cases, route: 'cases' as const },
      { name: dict.navigation.insights, route: 'insights' as const },
    ],
    social: [
      {
        name: "LinkedIn",
        href: siteConfig.social.linkedin.url,
        icon: "Linkedin" as IconName,
      },
    ],
  };
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
                  <LocalizedLink
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-background transition-colors"
                    external
                  >
                    <Icon className="h-6 w-6" />
                  </LocalizedLink>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.services}</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <LocalizedLink
                    route={item.route}
                    locale={locale as Locale}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.company}</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <LocalizedLink
                    route={item.route}
                    locale={locale as Locale}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.contact}</h3>
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
              © {new Date().getFullYear()} Yvonne Magnusson. {dict.footer.copyright}
            </p>
            <div className="mt-4 md:mt-0">
              <LocalizedLink
                route="contact"
                locale={locale as Locale}
                className="text-sm text-muted-foreground hover:text-background transition-colors"
              >
                {dict.footer.privacyPolicy}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}