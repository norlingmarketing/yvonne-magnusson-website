# Website Improvement Plan - Component Usage & Best Practices

## Review Date: 2025-08-29

## Current State Assessment

### ✅ Strengths
- **Homepage**: Excellent component usage with all sections properly modularized
- **Good use of UI components**: shadcn/ui and Magic UI components are well-integrated
- **Consistent styling**: Using CSS variables via Tailwind classes (bg-primary, text-foreground, etc.)
- **SEO Structure**: Proper metadata on all pages

### 🔧 Areas for Improvement

#### 1. Extract Reusable Components
- **Hero Sections**: Multiple pages have inline hero sections that could use a shared `PageHero` component
- **Card Lists**: Services, case studies, and other pages have repeated card patterns
- **Contact Form**: Currently inline in contact page, should be extracted as a component
- **Stats Display**: NumberTicker patterns repeated across pages

#### 2. Create Missing Page Components
- Convert inline page content to dedicated components for:
  - Contact form section
  - Service cards grid
  - Case study cards
  - Timeline section (About page)
  - Article cards (Insights)
  - Speaking topic cards

#### 3. Improve Data Management
- Move hardcoded data arrays to `/lib/data/` files
- Create TypeScript interfaces for data structures
- Centralize content that appears on multiple pages

#### 4. Enhance Component Patterns
- Add loading states for dynamic content
- Implement error boundaries for client components
- Add skeleton loaders for better UX
- Create consistent animation delays using a system

#### 5. Form Handling
- Extract contact form to its own component with React Hook Form + Zod
- Add proper form submission handling and success/error states
- Implement form validation patterns consistently

#### 6. Performance Optimizations
- Lazy load heavy components where appropriate
- Optimize image assets with proper sizing
- Consider dynamic imports for client-heavy components

## Implementation Plan

### Phase 1: Component Extraction (Priority: High) ✅ COMPLETED
1. **Create shared page components** (`/components/page-components/`)
   - [x] PageHero component for consistent hero sections
   - [x] ServiceCards component for service grid displays
   - [x] ProcessSteps component for workflow visualization
   - [x] ContactForm component with service type selection
   - [x] ContactMethods component for contact information
   - [x] CareerTimeline component for About page
   - [x] CurrentRoles component for professional roles
   - [x] CaseStudyCards component for detailed case studies
   - [x] ImpactAreas component for results visualization

2. **Extract and componentize forms**
   - [x] ContactForm component with full validation
   - [ ] NewsletterForm component for CTA sections

### Phase 2: Data Organization (Priority: High) ✅ COMPLETED  
3. **Move data to centralized files** (`/lib/data/`)
   - [x] services.ts - Service offerings data
   - [x] case-studies.ts - Case study content
   - [x] contact.ts - Contact methods and service types
   - [x] timeline.ts - Career timeline and current roles for About page
   - [ ] speaking-topics.ts - Speaking engagement topics
   - [ ] insights-articles.ts - Blog/insights content

4. **Create TypeScript interfaces** (`/lib/types/`)
   - [x] Define interfaces for all data structures
   - [x] Add proper typing to all components

### Phase 2.5: Page Updates (Priority: High) ✅ IN PROGRESS
5. **Update pages to use new components**
   - [x] Services page - fully componentized
   - [x] Contact page - fully componentized  
   - [x] About page - fully componentized
   - [ ] Case Studies page - partially componentized
   - [ ] Speaking page - needs componentization
   - [ ] Insights page - needs componentization

### Phase 3: UX Enhancements (Priority: Medium)
5. **Implement loading patterns**
   - [ ] Add Suspense boundaries where needed
   - [ ] Create skeleton components for major sections
   - [ ] Add loading states to forms

### Phase 4: Optimization (Priority: Low)
6. **Optimize client/server split**
   - [ ] Review "use client" directives and minimize where possible
   - [ ] Move static content to server components
   - [ ] Implement dynamic imports for heavy components

## Files to Refactor

### High Priority
- `/app/kontakt/page.tsx` - Extract contact form component
- `/app/om-yvonne/page.tsx` - Extract timeline and stats components
- `/app/tjanster/page.tsx` - Extract service cards component
- `/app/case-referenser/page.tsx` - Extract case study cards

### Medium Priority
- `/app/forelasningar/page.tsx` - Extract speaking topics component
- `/app/insikter/insights-content.tsx` - Extract article cards component
- `/app/media/page.tsx` - Review and componentize if needed

### Service Pages
- `/app/tjanster/styrelsearbete/page.tsx`
- `/app/tjanster/senior-advisor/page.tsx`
- `/app/tjanster/interimledare/page.tsx`
- `/app/tjanster/workshops/page.tsx`

## Success Metrics
- Reduced code duplication by 40%+
- Improved component reusability
- Better TypeScript coverage
- Consistent patterns across all pages
- Easier maintenance and updates
- Better performance scores

## Notes
- Maintain current visual design and functionality
- Follow existing naming conventions
- Keep Swedish-first content approach
- Preserve SEO optimization
- Test thoroughly after each refactor