# Localization Guide

This project implements internationalization (i18n) for Swedish (sv) and English (en) following Next.js best practices.

## 🎯 **What's Been Implemented**

### **1. Core Localization Structure**
- **Locale Configuration**: Swedish (default) and English support
- **Centralized Dictionaries**: JSON files for both languages in `lib/dictionaries/`
- **Type Safety**: Full TypeScript support with proper types
- **Middleware**: Automatic locale routing and redirects

### **2. Localized Components**
- **LocalizedNav**: Navigation with dynamic content and locale switching
- **LocalizedFooter**: Footer with localized links and content
- **LocalizedHeroSection**: Hero section with localized text and CTAs
- **LocaleSwitcher**: Easy language switching between Swedish and English

### **3. Localized Pages**
- **Home Page** (`/[locale]/`): Localized hero section and content
- **About Page** (`/[locale]/om-yvonne`): Localized about content
- **Services Page** (`/[locale]/tjanster`): Localized services listing
- **Contact Page** (`/[locale]/kontakt`): Localized contact form

## 📁 **File Structure**

```
lib/
├── dictionaries/
│   ├── en.json          # English translations
│   ├── sv.json          # Swedish translations
│   └── index.ts         # Dictionary loader
├── i18n.ts              # Locale configuration
├── hooks/
│   └── use-dictionary.ts # Client-side dictionary hook
└── utils/
    └── format.ts        # Locale-specific formatting utilities

app/
├── [locale]/            # Locale-specific routes
│   ├── layout.tsx       # Locale layout wrapper with nav & footer
│   ├── page.tsx         # Localized home page
│   ├── om-yvonne/       # Localized about page
│   ├── tjanster/        # Localized services page
│   └── kontakt/         # Localized contact page
├── layout.tsx           # Root layout
└── page.tsx             # Redirects to /sv

components/
├── layout/
│   └── localized-footer.tsx  # Localized footer
├── navigation/
│   └── localized-nav.tsx     # Localized navigation
├── sections/
│   └── localized-hero-section.tsx # Localized hero section
└── locale-switcher.tsx  # Language switcher component

middleware.ts            # Locale routing middleware
```

## 🚀 **Key Features**

- **Swedish as Default**: Matches your current content
- **SEO Optimized**: Proper `hreflang` tags and locale metadata
- **Performance**: Server-side rendering with static generation
- **User Experience**: Smooth locale switching without page reloads
- **Maintainable**: Easy to add new translations and languages
- **Complete Coverage**: All navigation, footer, and page content is localized

## 📝 **How to Use**

### **Adding New Translations**

1. **Update Dictionary Files**: Add new keys to both `lib/dictionaries/en.json` and `lib/dictionaries/sv.json`
2. **Use in Components**: Use `getDictionary(locale)` in server components or `useDictionary()` hook in client components

### **Creating New Localized Pages**

1. **Create Page Structure**: Create pages under `app/[locale]/`
2. **Access Locale**: Get locale via `params.locale`
3. **Load Dictionary**: Use `getDictionary(locale)` to get translations
4. **Use Translations**: Reference dictionary keys for all text content

### **Example Usage**

#### Server Components
```tsx
import { getDictionary } from '@/lib/dictionaries';

export default async function MyPage({ params }: { params: { locale: string } }) {
  const dictionary = await getDictionary(params.locale as 'en' | 'sv');
  
  return (
    <h1>{dictionary.newSection.title}</h1>
  );
}
```

#### Client Components
```tsx
'use client';
import { useDictionary } from '@/lib/hooks/use-dictionary';

export function MyComponent({ dictionary }: { dictionary: Dictionary }) {
  const dict = useDictionary({ dictionary });
  
  return (
    <button>{dict.common.submit}</button>
  );
}
```

## 🌍 **Adding New Locales**

1. **Add Locale**: Add the new locale to `lib/i18n.ts`
2. **Create Dictionary**: Create a new dictionary file: `lib/dictionaries/[locale].json`
3. **Update Middleware**: Update `middleware.ts` if needed
4. **Update Layout**: Add the locale to `generateStaticParams` in `app/[locale]/layout.tsx`

## 🔧 **Testing Your Setup**

1. **Visit `/`** → Should redirect to `/sv` (Swedish)
2. **Visit `/en`** → Should show English content
3. **Use the locale switcher** → Switch between languages
4. **Check URLs** → Should show proper locale prefixes
5. **Navigate between pages** → All content should be localized

## 📚 **Dictionary Structure**

The dictionaries are organized into logical sections:

- **navigation**: Menu items and navigation text
- **common**: Reusable UI elements (buttons, labels, etc.)
- **home**: Home page specific content
- **about**: About page content
- **services**: Services page content
- **company**: Company information
- **contact**: Contact information and form
- **footer**: Footer content
- **hero**: Hero section content
- **sections**: Various page sections

## 🎨 **Best Practices**

1. **Keep translations organized**: Group related translations in logical sections
2. **Use descriptive keys**: Make keys self-explanatory (e.g., `navigation.home` not just `home`)
3. **Maintain consistency**: Use the same key structure across all dictionary files
4. **Handle missing translations**: The system falls back to Swedish for missing translations
5. **Type safety**: Use the `Dictionary` type for better TypeScript support
6. **Locale-specific routing**: Always use `/${locale}/` prefix for internal links

## 🚀 **Performance Benefits**

- **Static Generation**: All locale combinations are pre-built
- **Server-side Rendering**: Dictionary loading happens on the server
- **Client-side Switching**: Smooth locale changes without full page reloads
- **Optimized Bundles**: Only load the dictionary for the current locale

## 🔍 **SEO & Accessibility**

- **Proper hreflang**: Correct language indicators for search engines
- **Locale-specific URLs**: Clear language identification in URLs
- **Screen Reader Support**: Proper language attributes for accessibility
- **Search Engine Optimization**: Language-specific content indexing

The system is now fully functional and ready for production use!