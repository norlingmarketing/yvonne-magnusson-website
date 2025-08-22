"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const navigation = [
  { name: "Hem", href: "/" },
  { name: "Om Yvonne", href: "/om-yvonne" },
  { name: "Tjänster", href: "/tjanster" },
  { name: "Föreläsningar", href: "/forelasningar" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insikter", href: "/insikter" },
  { name: "Media", href: "/media" },
  { name: "Kontakt", href: "/kontakt" },
];

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <FlickeringGrid
        className="absolute inset-0 z-0 opacity-30"
        squareSize={8}
        gridGap={12}
        color="#2C5F7C"
        maxOpacity={0.03}
        flickerChance={0.02}
        height={100}
        width={1200}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              <span className="font-serif">Yvonne Magnusson</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group",
                    pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-white hover:to-gray-50"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname !== item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F7C]/5 to-[#D4A574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ShimmerButton
              className="text-white bg-[#2C5F7C] hover:bg-[#2C5F7C]/90 px-4 py-2 text-sm"
              shimmerColor="#D4A574"
            >
              <Link href="/kontakt">Boka möte</Link>
            </ShimmerButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <ShimmerButton
                  className="w-full text-white bg-[#2C5F7C] hover:bg-[#2C5F7C]/90 px-4 py-2 text-sm"
                  shimmerColor="#D4A574"
                >
                  <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                    Boka möte
                  </Link>
                </ShimmerButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}