# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
```

### Build
```bash
npm run build        # Build for production with Turbopack
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

### UI Components
```bash
npx shadcn@latest add <component>  # Add new shadcn/ui component
```

### Testing
```bash
# No test framework configured yet - add when needed
```

### Git Workflow - CRITICAL REQUIREMENT
```bash
git add .                # Stage changes
git commit -m "message"  # Commit regularly and often
git push                 # Push when requested
```

**IMPORTANT:** Commit changes regularly and frequently during all work. This is a critical requirement:
- Commit after completing each major task or component
- Commit before starting risky operations
- Use descriptive commit messages that explain the change
- Always commit working code, never broken code
- When in doubt, commit more frequently rather than less

## Architecture

This is a professional website for Yvonne Magnusson, a transformation leadership expert. Built with Next.js 15.5.0 and modern tooling.

### Framework & Technology Stack
- **Next.js 15.5.2** with App Router and TypeScript
- **React 19.1.1** with strict mode enabled
- **Tailwind CSS 4** for styling with PostCSS integration
- **Turbopack** for optimized development and builds
- **Individual Magic UI components** for premium animations (not full library)
- **Shadcn/ui** for base UI components with "new-york" style
- **Framer Motion** for smooth animations
- **React Hook Form + Zod** for form validation
- **Next Themes** for light/dark mode support
- **Lucide React** for consistent iconography

### Site Structure & Content Strategy
The website targets Swedish executive market with Swedish-first content and professional positioning:

**Core Pages:**
- Homepage with hero, credentials, services, testimonials
- About (Om Yvonne) with career timeline
- Services overview with 4 main offerings
- Contact with comprehensive form

**Service Detail Pages:**
- Board Work (Styrelsearbete) - governance expertise
- Senior Advisor - ongoing advisory services  
- Interim Executive (Interimledare) - crisis leadership
- Workshops - training and development programs

**Authority & Content Pages:**
- Speaking (Föreläsningar) - keynote topics and booking
- Case Studies - transformation success stories
- Insights (Blog) - thought leadership articles
- Media & Press - press kit and media resources

### Design System & Branding
- **Colors:** Primary #2C5F7C (teal), Secondary #D4A574 (sand)
- **Typography:** Playfair Display (headings), Inter (body)
- **Style:** Professional, sophisticated, Swedish executive market
- **Responsive:** Mobile-first design with desktop optimization

### Component Architecture
```
/components
├── /layout - Footer and structural components
├── /magicui - Premium animated components (gradient text, number tickers, shimmer buttons)
├── /navigation - Main navigation with mobile menu
├── /page-components - Reusable page section components
│   ├── page-hero.tsx - Standardized hero sections across pages
│   ├── service-cards.tsx - Service offering displays
│   ├── service-detail-hero.tsx - Service detail page headers
│   ├── process-steps.tsx - Workflow visualization components
│   ├── contact-form.tsx - Contact forms with validation
│   ├── contact-methods.tsx - Contact information display
│   ├── career-timeline.tsx - Professional timeline component
│   ├── current-roles.tsx - Active board/advisory roles
│   ├── case-study-cards.tsx - Detailed case study presentation
│   ├── impact-areas.tsx - Results and impact visualization
│   ├── speaking-topics.tsx - Speaking engagement topics
│   ├── article-cards.tsx - Blog/insights article display
│   ├── expert-topics.tsx - Expertise area displays
│   ├── expertise-section.tsx - Professional expertise sections
│   ├── media-appearances.tsx - Media and speaking appearances
│   ├── media-contact-info.tsx - Press contact information
│   ├── media-kit-downloads.tsx - Downloadable media resources
│   └── press-releases.tsx - Press release content
├── /sections - Homepage sections (hero, credentials, services, testimonials, CTA)
├── /seo - SEO components (structured data)
└── /ui - Base UI components (shadcn/ui based)
```

### Data Architecture
```
/lib
├── /data - Centralized data files (NEW)
│   ├── services.ts - Service offerings and process steps
│   ├── case-studies.ts - Case studies and impact data
│   ├── contact.ts - Contact methods and service types
│   ├── timeline.ts - Career timeline and current roles
│   ├── speaking-topics.ts - Speaking topics and formats
│   ├── insights-articles.ts - Blog articles and categories
│   └── media-kit.ts - Press releases and media resources
├── /types - TypeScript interfaces for all data structures
├── site-config.ts - Site configuration
└── utils.ts - Utility functions
```

### Internationalization (i18n) Implementation

**Technical Architecture:**
This site uses **native Next.js i18n** (not next-intl) with a server-side dictionary pattern for bilingual support (English/Swedish).

**Directory Structure:**
```
app/
├── [locale]/              # Dynamic route segment for locale
│   ├── layout.tsx        # Locale-aware layout with nav/footer
│   ├── page.tsx          # Homepage with locale support
│   └── ...               # All pages under locale routing
middleware.ts              # Locale detection and routing
lib/
├── dictionaries.ts       # Server-side dictionary loader
messages/
├── en.json              # English translations 
└── sv.json              # Swedish translations
```

**Key Files:**

1. **middleware.ts** - Locale routing and detection:
```typescript
import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  locales: ['en', 'sv'],
  defaultLocale: 'en'  // English is default
});
```

2. **lib/dictionaries.ts** - Server-side dictionary loading:
```typescript
import 'server-only';
const dictionaries = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  sv: () => import('@/messages/sv.json').then((module) => module.default),
} as const;
export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
```

3. **app/[locale]/layout.tsx** - Locale-aware layout:
```typescript
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'sv');
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
```

**Component Pattern:**
All components receive `locale` and `dict` as props (NO hooks or client providers):

```typescript
interface ComponentProps {
  locale: string;
  dict: any;
}

export function MyComponent({ locale, dict }: ComponentProps) {
  return (
    <div>
      <h1>{dict.section.title}</h1>
      <Link href={`/${locale}/contact`}>{dict.common.contact}</Link>
    </div>
  );
}
```

**Translation Files:**
- **messages/en.json** - Complete English translations
- **messages/sv.json** - Complete Swedish translations
- Structure: Nested objects matching component hierarchy
- No fallback text in components (translations must be complete)

**⚠️ CRITICAL TRANSLATION RULES - ZERO TOLERANCE FOR VIOLATIONS:**

**❌ ABSOLUTE PROHIBITIONS:**
- ❌ **NEVER use hardcoded text/copy in components** - THIS IS THE #1 RULE
- ❌ **NEVER use string literals in JSX** like `<h1>Welcome to our site</h1>`
- ❌ **NEVER hardcode Swedish/English text** like `"Föreläsningar"` or `"About Us"`
- ❌ **NEVER use translation hooks** (useTranslations, useT, etc.)
- ❌ **NEVER add fallback text** (`dict.title || "Default Title"`)
- ❌ **NEVER put content arrays/objects directly in components**

**✅ MANDATORY REQUIREMENTS:**
- ✅ **ALL text MUST come from `dict` prop**: `{dict.section.title}`
- ✅ **ALL components MUST receive `dict` via props** from server components
- ✅ **ALL text MUST exist in both `/messages/en.json` AND `/messages/sv.json`**
- ✅ **ALWAYS use server-side dictionary loading** via `getDictionary()`
- ✅ **ALWAYS use locale in internal links**: `/${locale}/page`
- ✅ **ALL content arrays MUST be in translation files**, not component files

**Translation File Management:**
- **English**: `/messages/en.json` - Primary language, complete translations required
- **Swedish**: `/messages/sv.json` - Secondary language, must match en.json structure exactly
- **Structure**: Nested objects by component/section (e.g., `hero.title`, `services.boardWork.description`)
- **Completeness**: Every key in en.json MUST have corresponding translation in sv.json

**URL Structure:**
- Default: `/` → `/en` (English default)
- Swedish: `/sv` → `/sv`
- All pages: `/en/contact`, `/sv/kontakt`

**Why Native Next.js Approach:**
- Server-side rendering compatible
- No client-side hydration issues
- Better performance (no client-side translation loading)
- Simpler debugging and maintenance
- Full TypeScript support

### Content Management Approach
- English-first content with Swedish translations
- SEO optimized with comprehensive metadata
- Client-side components separated from server-side metadata (layout.tsx pattern)  
- All content managed through translation files in `/messages/`
- Site configuration centralized in `/lib/site-config.ts` (contact info, social links)

### Component Reuse Guidelines - CRITICAL

**NEVER hardcode content directly in pages:**
❌ **WRONG** - Hardcoding content in page files:
```tsx
// In app/services/page.tsx
export default function ServicesPage() {
  const services = [
    { title: "Board Work", description: "..." },
    { title: "Advisory", description: "..." }
  ];
  
  return (
    <div>
      <h1>Our Services</h1>
      {services.map(service => (
        <div key={service.title}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
```

**ALWAYS use reusable components with centralized data:**
✅ **CORRECT** - Use page-components with centralized data:
```tsx
// In app/services/page.tsx
import { ServiceCards } from '@/components/page-components/service-cards';
import { services } from '@/lib/data/services';

export default function ServicesPage() {
  return <ServiceCards services={services} />;
}
```

**Component Usage Patterns:**
- **Page Components** (`@/components/page-components/`) - Reusable sections for pages
- **Section Components** (`@/components/sections/`) - Homepage-specific sections  
- **Data Files** (`@/lib/data/`) - Centralized content that feeds components
- **Type Definitions** (`@/lib/types/`) - TypeScript interfaces for all data structures

**Data Centralization Examples:**
- `educationData` → `/lib/data/timeline.ts`
- `industries` → `/lib/data/case-studies.ts`
- `credentials` → `/lib/data/media-kit.ts`
- `boardCompetencies` → `/lib/data/services.ts`

**Critical Requirements:**
- ALL content arrays must be in data files, not in page components
- Import data from centralized files and pass as props to components
- Never define content arrays inline in page files
- Use TypeScript interfaces to ensure data consistency

**Benefits of this approach:**
- Content updates only require changing data files
- Components can be reused across multiple pages
- Type safety ensures consistency
- Easier to maintain and update content
- Single source of truth for all content

### Form Validation Pattern
- All forms use React Hook Form with Zod schemas for validation
- Form components should follow the established pattern in contact forms
- Error handling and user feedback integrated with UI components

### Key Business Requirements
- **Target Audience:** Board members, C-suite executives, investors, event organizers
- **Services:** 4 main offerings with clear value propositions and engagement models
- **Positioning:** Premium transformation expert with 30+ years experience, 4 turnarounds
- **Lead Generation:** Multiple contact forms, newsletter signup, strategic CTAs
- **Credibility:** Case studies, testimonials, media appearances, speaking credentials

### 🌐 TRANSLATION MANAGEMENT - CRITICAL REQUIREMENTS

**🚨 ZERO TOLERANCE POLICY: NO HARDCODED TEXT ALLOWED**

This section contains the most critical rules for this project. Violating these rules breaks the entire internationalization system.

**❌ COMPLETELY FORBIDDEN:**
```typescript
// ❌ NEVER do this - hardcoded text
export function MyComponent() {
  return <h1>Welcome to our website</h1>; // BREAKS I18N
}

// ❌ NEVER do this - hardcoded arrays
const services = [
  { title: "Board Work", description: "..." }, // BREAKS I18N
  { title: "Advisory", description: "..." }
];

// ❌ NEVER do this - mixed hardcoded/translated
<button>{isSwedish ? "Kontakta oss" : "Contact us"}</button> // WRONG APPROACH
```

**✅ CORRECT IMPLEMENTATION:**
```typescript
// ✅ ALWAYS do this - use dictionary
interface MyComponentProps {
  locale: string;
  dict: Dictionary;
}

export function MyComponent({ locale, dict }: MyComponentProps) {
  return <h1>{dict.common.welcome}</h1>; // CORRECT
}

// ✅ ALWAYS do this - data from translations
const services = dict.services.items; // CORRECT
```

**How to Add New Text Content:**
1. **Add to English translation** (`/messages/en.json`) first
2. **Add matching Swedish translation** (`/messages/sv.json`) 
3. **Use in component**: `{dict.section.key}`
4. **Never skip step 2** - both languages must always be complete

**Translation File Structure:**
```json
{
  "common": { "welcome": "Welcome", "contact": "Contact" },
  "hero": { "title": "Transform Your Business", "subtitle": "..." },
  "services": { "title": "Our Services", "items": [...] }
}
```

**Enforcement:**
- All PRs will be rejected if hardcoded text is found
- Every component must use `dict` prop for ALL user-facing text
- No exceptions, no fallbacks, no shortcuts

### Technical Patterns
- **Metadata:** Use layout.tsx files for page-specific SEO metadata
- **Client Components:** "use client" for interactive components with hooks/state
- **Forms:** React Hook Form with Zod validation
- **Navigation:** Dynamic active states based on pathname
- **Animations:** Individual Magic UI components for premium feel, avoid overuse
- **Responsive:** Tailwind CSS classes with mobile-first approach
- **Icons:** Lucide React icons with icon mapping utility (`@/lib/utils/icon-map.ts`)
- **Theme Support:** Next Themes provider with system, light, dark modes

### Styling Guidelines - CRITICAL

#### Light/Dark Mode Theming Rules

**NEVER use hardcoded colors - THIS BREAKS DARK MODE:**
❌ `bg-blue-600`, `text-green-500`, `bg-white`, `bg-gray-50`, `text-gray-600`
❌ `border-gray-200`, `hover:bg-blue-700`, `text-red-500`
❌ `text-blue-100`, `bg-blue-50`, `from-gray-50 to-white`
❌ `text-yellow-400`, `bg-gradient-to-br from-gray-900`

**ALWAYS use shadcn CSS variables:**
✅ `bg-primary` / `text-primary-foreground` - Primary brand colors
✅ `bg-secondary` / `text-secondary-foreground` - Secondary elements  
✅ `bg-muted` / `text-muted-foreground` - Subtle backgrounds and secondary text
✅ `bg-card` / `text-card-foreground` - Card backgrounds (replaces bg-white)
✅ `bg-background` / `text-foreground` - Main page background and text
✅ `border-border` - All borders
✅ `ring-ring` - Focus rings and outlines

**Common Replacements:**
✅ `bg-white` → `bg-card` or `bg-background`
✅ `text-gray-600` → `text-muted-foreground`
✅ `bg-gray-50` → `bg-muted`
✅ `text-blue-100` → `text-primary-foreground/90`
✅ `bg-blue-50` → `bg-primary/10`
✅ `text-blue-600` → `text-primary`
✅ `from-gray-50 to-white` → `from-muted/50 to-background`

**Hover and Interactive States:**
✅ `hover:bg-primary/90` - Use opacity modifiers
✅ `hover:bg-muted/50` - Subtle hover effects
✅ `focus:ring-ring` - Consistent focus styles

**Gradient and Special Effects:**
✅ `from-primary/10 to-secondary/10` - Gradients with opacity
✅ `bg-gradient-to-br from-muted/50 to-background` - Page backgrounds
✅ `bg-gradient-to-br from-primary to-primary/80` - Primary gradients

**WARNING:** Using hardcoded colors will break the site's dark mode functionality completely.

**CSS Variable System:** All colors defined in `globals.css` with OKLCH color space and light/dark variants
**Component Styling:** Use `cn()` utility to merge Tailwind classes conditionally

### Path Aliases
- `@/components` - All React components
- `@/components/ui` - Base UI components (shadcn/ui)
- `@/components/magicui` - Premium animated components
- `@/lib/utils` - Utility functions including `cn()` for className merging
- `@/lib` - Library functions and site configuration
- `@/hooks` - Custom React hooks

### Image Handling
- Images stored in `/public/images/` directory
- Always use Next.js Image component for optimization
- Lazy loading and responsive images are handled automatically

### Configuration Files
- **components.json** - Shadcn/ui configuration with "new-york" style, CSS variables enabled, stone base color
- **tsconfig.json** - TypeScript configuration with strict mode and path aliases  
- **postcss.config.mjs** - Tailwind CSS 4 PostCSS integration
- **eslint.config.mjs** - ESLint configuration with Next.js and TypeScript rules
- **next.config.ts** - Next.js configuration (minimal setup)
- **globals.css** - CSS variables for theming with OKLCH color space, light/dark mode support
- **lib/site-config.ts** - Centralized site configuration (contact info, social links, company details)

### Color System Examples
❌ **WRONG** - Never hardcode colors:
```tsx
<div className="bg-blue-600 text-white">
<div style={{backgroundColor: '#2C5F7C'}}>
```

✅ **CORRECT** - Always use CSS variables:
```tsx
<div className="bg-primary text-primary-foreground">
<div className="bg-card text-card-foreground border border-border">
```

### Deployment
- Optimized for Vercel deployment with Turbopack
- Production builds use `npm run build` with automatic optimization
- Static generation for pages where possible for better performance