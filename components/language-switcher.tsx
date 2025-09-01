"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { getAlternateLanguageRoute, type Locale } from "@/lib/routes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  locale: string;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (newLocale: Locale) => {
    // Use the route mapping system to get the correct URL for the target language
    const newPath = getAlternateLanguageRoute(pathname, newLocale)
    router.push(newPath)
  }

  const languages = [
    { code: 'en' as Locale, label: 'English', flag: '🇺🇸' },
    { code: 'sv' as Locale, label: 'Svenska', flag: '🇸🇪' },
  ]

  // const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`cursor-pointer ${locale === language.code ? 'bg-muted' : ''}`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.label}
            {locale === language.code && (
              <span className="ml-auto text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}