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

This is a Next.js 15.5.0 application with the following key characteristics:

### Framework Setup
- **Next.js 15.5.0** with App Router
- **React 19.1.0** and **React DOM 19.1.0**
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** for styling with PostCSS integration
- **Turbopack** enabled for both development and build

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font setup
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind directives
- `/lib` - Utility functions and shared code
  - `utils.ts` - Utility functions including `cn()` for className merging
- `/components` - React components (to be created)
  - UI components will use shadcn/ui conventions

### Component Library Setup
- **shadcn/ui** configuration in `components.json`
  - Style: "new-york"
  - Base color: "zinc"
  - CSS variables enabled
  - Icons: lucide-react

### Path Aliases
- `@/*` maps to the project root
- Components: `@/components`
- UI components: `@/components/ui`
- Utilities: `@/lib/utils`
- Hooks: `@/hooks`

### Dependencies
- **class-variance-authority** - For component variants
- **clsx** and **tailwind-merge** - For className utilities
- **lucide-react** - Icon library