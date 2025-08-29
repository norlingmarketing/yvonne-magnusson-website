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

## Architecture

This is a professional website for Yvonne Magnusson, a transformation leadership expert. Built with Next.js 15.5.0 and modern tooling.

### Framework & Technology Stack
- **Next.js 15.5.0** with App Router and TypeScript
- **React 19.1.0** with strict mode enabled
- **Tailwind CSS 4** for styling with PostCSS integration
- **Turbopack** for optimized development and builds
- **Magic UI** for premium animations and components
- **Shadcn/ui** for base UI components
- **Framer Motion** for smooth animations
- **React Hook Form + Zod** for form validation

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
├── /page-components - Reusable page section components (NEW)
│   ├── page-hero.tsx - Standardized hero sections across pages
│   ├── service-cards.tsx - Service offering displays
│   ├── process-steps.tsx - Workflow visualization components
│   ├── contact-form.tsx - Contact forms with validation
│   ├── contact-methods.tsx - Contact information display
│   ├── career-timeline.tsx - Professional timeline component
│   ├── current-roles.tsx - Active board/advisory roles
│   ├── case-study-cards.tsx - Detailed case study presentation
│   ├── impact-areas.tsx - Results and impact visualization
│   ├── speaking-topics.tsx - Speaking engagement topics
│   ├── article-cards.tsx - Blog/insights article display
│   └── media-kit.tsx - Press and media resources
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

### Content Management Approach
- Swedish-first content with professional terminology
- SEO optimized with comprehensive metadata
- Client-side components separated from server-side metadata (layout.tsx pattern)
- Static content embedded in components for immediate deployment
- Site configuration centralized in `/lib/site-config.ts` (contact info, social links)

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

### Technical Patterns
- **Metadata:** Use layout.tsx files for page-specific SEO metadata
- **Client Components:** "use client" for interactive components with hooks/state
- **Forms:** React Hook Form with Zod validation
- **Navigation:** Dynamic active states based on pathname
- **Animations:** Magic UI components for premium feel, avoid overuse
- **Responsive:** Tailwind CSS classes with mobile-first approach

### Styling Guidelines - CRITICAL

#### Light/Dark Mode Theming Rules

**NEVER use hardcoded colors:**
❌ `bg-blue-600`, `text-green-500`, `bg-white`, `bg-gray-50`, `text-gray-600`
❌ `border-gray-200`, `hover:bg-blue-700`, `text-red-500`

**ALWAYS use shadcn CSS variables:**
✅ `bg-primary` / `text-primary-foreground` - Primary brand colors
✅ `bg-secondary` / `text-secondary-foreground` - Secondary elements  
✅ `bg-muted` / `text-muted-foreground` - Subtle backgrounds and secondary text
✅ `bg-card` / `text-card-foreground` - Card backgrounds (replaces bg-white)
✅ `bg-background` / `text-foreground` - Main page background and text
✅ `border-border` - All borders
✅ `ring-ring` - Focus rings and outlines

**Hover and Interactive States:**
✅ `hover:bg-primary/90` - Use opacity modifiers
✅ `hover:bg-muted/50` - Subtle hover effects
✅ `focus:ring-ring` - Consistent focus styles

**Gradient and Special Effects:**
✅ `from-primary/10 to-secondary/10` - Gradients with opacity
✅ `bg-gradient-to-br from-muted/50 to-background` - Page backgrounds

**CSS Variable System:** All colors defined in `globals.css` with light/dark variants
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
- **postcss.config.mjs** - Tailwind CSS PostCSS integration
- **globals.css** - CSS variables for theming (light/dark mode support built-in)
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