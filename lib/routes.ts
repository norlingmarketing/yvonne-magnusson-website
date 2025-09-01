/**
 * Centralized route configuration for bilingual URLs
 * This file defines all routes with English and Swedish URL paths
 */

export type Locale = 'en' | 'sv';

export interface LocalizedRoute {
  en: string;
  sv: string;
}

export interface RouteWithMetadata extends LocalizedRoute {
  titleKey: string;
  descriptionKey?: string;
}

// Main route configuration
export const routes = {
  // Core pages
  home: {
    en: '/',
    sv: '/',
    titleKey: 'home.title',
    descriptionKey: 'home.description'
  },
  about: {
    en: '/about',
    sv: '/om-yvonne',
    titleKey: 'about.title',
    descriptionKey: 'about.description'
  },
  services: {
    en: '/services',
    sv: '/tjanster',
    titleKey: 'services.title',
    descriptionKey: 'services.description'
  },
  speaking: {
    en: '/speaking',
    sv: '/forelasningar',
    titleKey: 'speaking.title',
    descriptionKey: 'speaking.description'
  },
  cases: {
    en: '/case-studies',
    sv: '/case-referenser',
    titleKey: 'cases.title',
    descriptionKey: 'cases.description'
  },
  insights: {
    en: '/insights',
    sv: '/insikter',
    titleKey: 'insights.title',
    descriptionKey: 'insights.description'
  },
  media: {
    en: '/media',
    sv: '/media',
    titleKey: 'media.title',
    descriptionKey: 'media.description'
  },
  contact: {
    en: '/contact',
    sv: '/kontakt',
    titleKey: 'contact.title',
    descriptionKey: 'contact.description'
  },

  // Service detail pages
  boardWork: {
    en: '/services/board-work',
    sv: '/tjanster/styrelsearbete',
    titleKey: 'services.boardWork.title',
    descriptionKey: 'services.boardWork.description'
  },
  seniorAdvisor: {
    en: '/services/senior-advisor',
    sv: '/tjanster/senior-advisor',
    titleKey: 'services.seniorAdvisor.title',
    descriptionKey: 'services.seniorAdvisor.description'
  },
  interimExecutive: {
    en: '/services/interim-executive',
    sv: '/tjanster/interim-ledare',
    titleKey: 'services.interimExecutive.title',
    descriptionKey: 'services.interimExecutive.description'
  },
  workshops: {
    en: '/services/workshops',
    sv: '/tjanster/workshops',
    titleKey: 'services.workshops.title',
    descriptionKey: 'services.workshops.description'
  }
} as const;

export type RouteKey = keyof typeof routes;

// Helper function to get localized route path
export function getLocalizedRoute(routeKey: RouteKey, locale: Locale): string {
  return routes[routeKey][locale];
}

// Helper function to get full localized URL with locale prefix
export function getLocalizedPath(routeKey: RouteKey, locale: Locale): string {
  const route = getLocalizedRoute(routeKey, locale);
  return `/${locale}${route}`;
}

// Helper function to find route key from pathname
export function getCurrentRoute(pathname: string): RouteKey | null {
  // Remove locale prefix (e.g., '/en' or '/sv')
  const pathWithoutLocale = pathname.replace(/^\/(en|sv)/, '') || '/';
  
  // Find matching route
  for (const [key, route] of Object.entries(routes)) {
    if (route.en === pathWithoutLocale || route.sv === pathWithoutLocale) {
      return key as RouteKey;
    }
  }
  
  return null;
}

// Helper function to get alternate language URL for language switcher
export function getAlternateLanguageRoute(currentPath: string, targetLocale: Locale): string {
  const currentRoute = getCurrentRoute(currentPath);
  
  if (!currentRoute) {
    // Fallback to home page if route not found
    return `/${targetLocale}`;
  }
  
  return getLocalizedPath(currentRoute, targetLocale);
}

// Type-safe route names for components
export const routeNames = Object.keys(routes) as RouteKey[];

// Navigation routes (subset of all routes for main navigation)
export const navigationRoutes: RouteKey[] = [
  'home',
  'about', 
  'services',
  'speaking',
  'cases',
  'insights',
  'media'
];

// Service routes for service navigation
export const serviceRoutes: RouteKey[] = [
  'boardWork',
  'seniorAdvisor', 
  'interimExecutive',
  'workshops'
];