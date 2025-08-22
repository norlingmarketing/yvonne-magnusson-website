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
├── /sections - Homepage sections (hero, credentials, services, testimonials, CTA)
└── /ui - Base UI components (shadcn/ui based)
```

### Content Management Approach
- Swedish-first content with professional terminology
- SEO optimized with comprehensive metadata
- Client-side components separated from server-side metadata (layout.tsx pattern)
- Static content embedded in components for immediate deployment

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

### Path Aliases
- `@/components` - All React components
- `@/components/ui` - Base UI components (shadcn/ui)
- `@/components/magicui` - Premium animated components
- `@/lib/utils` - Utility functions including `cn()` for className merging