"use client";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { LocalizedLink } from "@/components/localized-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/lib/types/dictionary";
import { navigationRoutes, type Locale, getLocalizedPath } from "@/lib/routes";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

interface MainNavProps {
  locale: string;
  dict: Dictionary;
}

export function MainNav({ locale, dict }: MainNavProps) {
  const scrollY = useScrollY();
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const navLinks = useMemo(
    () => [
      { id: 1, label: dict.navigation.home, route: 'home' as const },
      { id: 2, label: dict.navigation.about, route: 'about' as const },
      { id: 3, label: dict.navigation.services, route: 'services' as const },
      { id: 4, label: dict.navigation.speaking, route: 'speaking' as const },
      { id: 5, label: dict.navigation.cases, route: 'cases' as const },
      { id: 6, label: dict.navigation.insights, route: 'insights' as const },
      { id: 7, label: dict.navigation.media, route: 'media' as const },
    ],
    [dict],
  );

  return (
    <header className="sticky top-0 z-50 px-6 py-4 xl:px-0">
      <nav className="relative mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <LocalizedLink route="home" locale={locale as Locale} className="text-2xl font-bold text-primary">
            Yvonne Magnusson
          </LocalizedLink>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="sticky left-4 right-4 top-4 z-[60] hidden items-center justify-center gap-x-5 md:flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              boxShadow:
                scrollY >= 120
                  ? "0 0 0 1px hsl(var(--border)), 0 1px 2px -1px hsl(var(--border)), 0 2px 4px hsl(var(--muted))"
                  : "none",
            }}
            transition={{
              ease: "linear",
              duration: 0.05,
              delay: 0.05,
            }}
            className="flex h-12 w-auto items-center justify-center overflow-hidden rounded-full px-6 py-2.5 transition-all bg-background/90 backdrop-blur-sm md:p-1.5 md:py-2 border border-border"
          >
            <nav className="relative h-full items-center justify-between gap-x-3.5 md:flex">
              <ul className="flex h-full flex-col justify-center gap-6 md:flex-row md:justify-start md:gap-0 lg:gap-1">
                {navLinks.map((navItem) => {
                  const navPath = getLocalizedPath(navItem.route, locale as Locale);
                  return (
                    <li
                      key={navItem.id}
                      className="flex items-center justify-center px-[0.75rem] py-[0.375rem]"
                    >
                      <LocalizedLink 
                        route={navItem.route}
                        locale={locale as Locale}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          pathname === navPath 
                            ? "text-primary" 
                            : "text-foreground"
                        )}
                      >
                        {navItem.label}
                      </LocalizedLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: scrollY >= 120 ? "auto" : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.25,
                delay: 0.05,
              }}
              className="!hidden overflow-hidden rounded-full md:!block"
            >
              <AnimatePresence>
                {scrollY >= 120 && (
                  <motion.ul
                    initial={{ x: "125%" }}
                    animate={{ x: "0" }}
                    exit={{
                      x: "125%",
                      transition: { ease: "linear", duration: 1 },
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className="shrink-0 whitespace-nowrap"
                  >
                    <li>
                      <LocalizedLink
                        route="contact"
                        locale={locale as Locale}
                        className="relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full bg-primary px-3 py-1.5 text-primary-foreground outline-none hover:bg-primary/90 transition-colors text-sm"
                      >
                        {dict.navigation.contact}
                      </LocalizedLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </ul>

        {/* Desktop CTA Button */}
        <motion.div
          className="z-[999] hidden items-center gap-x-2 md:flex"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full">
            <LocalizedLink route="contact" locale={locale as Locale}>
              {dict.navigation.contact}
            </LocalizedLink>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            animate={active ? "open" : "close"}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "relative flex h-8 w-8 items-center justify-center md:hidden"
            )}
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-primary"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-primary"
              variants={{
                open: {
                  opacity: 0,
                },
                close: {
                  opacity: 1,
                },
              }}
            />
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-primary"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </MotionConfig>

        {/* Mobile Menu */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-lg md:hidden"
            >
              <ul className="space-y-2">
                {navLinks.map((navItem) => {
                  const navPath = getLocalizedPath(navItem.route, locale as Locale);
                  return (
                    <li key={navItem.id}>
                      <LocalizedLink
                        route={navItem.route}
                        locale={locale as Locale}
                        onClick={() => setActive(false)}
                        className={cn(
                          "block px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-lg",
                          pathname === navPath 
                            ? "text-primary bg-muted" 
                            : "text-foreground"
                        )}
                      >
                        {navItem.label}
                      </LocalizedLink>
                    </li>
                  );
                })}
                <li className="pt-2 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <LanguageSwitcher locale={locale} />
                    <span className="text-sm text-muted-foreground">{locale === 'sv' ? 'Språk' : 'Language'}</span>
                    <div className="ml-auto" />
                    <ThemeToggle />
                    <span className="text-sm text-muted-foreground">{locale === 'sv' ? 'Tema' : 'Theme'}</span>
                  </div>
                  <Button asChild className="w-full">
                    <LocalizedLink
                      route="contact"
                      locale={locale as Locale}
                      onClick={() => setActive(false)}
                    >
                      {dict.navigation.contact}
                    </LocalizedLink>
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}