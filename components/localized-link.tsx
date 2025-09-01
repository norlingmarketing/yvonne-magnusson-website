/**
 * LocalizedLink Component
 * A wrapper around Next.js Link that automatically handles locale-aware routing
 */

import Link from 'next/link';
import { forwardRef } from 'react';
import { type RouteKey, getLocalizedPath, type Locale } from '@/lib/routes';

// Props for using route keys (recommended approach)
interface LocalizedLinkWithRouteProps {
  route: RouteKey;
  locale: Locale;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Props for using direct href (fallback for external links or custom paths)
interface LocalizedLinkWithHrefProps {
  href: string;
  locale?: Locale;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

type LocalizedLinkProps = LocalizedLinkWithRouteProps | LocalizedLinkWithHrefProps;

// Type guard to check if we're using route key approach
function isRouteKeyProps(props: LocalizedLinkProps): props is LocalizedLinkWithRouteProps {
  return 'route' in props;
}

/**
 * LocalizedLink Component
 * 
 * Usage examples:
 * 
 * // Using route keys (recommended):
 * <LocalizedLink route="about" locale={locale}>About</LocalizedLink>
 * 
 * // Using direct href for external links:
 * <LocalizedLink href="https://example.com" external>External Link</LocalizedLink>
 * 
 * // Using direct href with locale (for custom internal paths):
 * <LocalizedLink href={`/${locale}/custom-path`}>Custom Link</LocalizedLink>
 */
export const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  (props, ref) => {
    const { children, className, onClick } = props;

    // Handle route key approach
    if (isRouteKeyProps(props)) {
      const { route, locale } = props;
      const href = getLocalizedPath(route, locale);
      
      return (
        <Link 
          href={href} 
          className={className} 
          onClick={onClick}
          ref={ref}
        >
          {children}
        </Link>
      );
    }

    // Handle direct href approach
    const { href, external = false } = props;
    
    // For external links, don't use Next.js Link
    if (external) {
      return (
        <a 
          href={href} 
          className={className} 
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref}
        >
          {children}
        </a>
      );
    }

    // For internal custom paths, use Next.js Link
    return (
      <Link 
        href={href} 
        className={className} 
        onClick={onClick}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

LocalizedLink.displayName = 'LocalizedLink';

// Convenience hook for getting localized href without rendering a link
export function useLocalizedHref(route: RouteKey, locale: Locale): string {
  return getLocalizedPath(route, locale);
}