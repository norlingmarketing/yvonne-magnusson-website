# Localization Guide

This project implements internationalization (i18n) for Swedish (sv) and English (en) following Next.js best practices.

## Structure

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
│   ├── layout.tsx       # Locale layout wrapper
│   ├── page.tsx         # Localized home page
│   └── kontakt/         # Localized contact page
└── layout.tsx           # Root layout

components/
└── locale-switcher.tsx  # Language switcher component

middleware.ts            # Locale routing middleware
```

## How It Works

1. **Middleware**: Automatically redirects users to the default locale (Swedish) if no locale is specified
2. **Dynamic Routes**: Uses `[locale]` parameter to create locale-specific pages
3. **Dictionary System**: Centralized JSON files for all translations
4. **Server Components**: Dictionary loading happens on the server for better performance
5. **Client Components**: Use the `useDictionary` hook for client-side components

## Adding New Translations

### 1. Update Dictionary Files

Add new keys to both `lib/dictionaries/en.json` and `lib/dictionaries/sv.json`:

```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "New section description"
  }
}
```

### 2. Use in Components

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

## Adding New Locales

1. Add the new locale to `lib/i18n.ts`:
```ts
export const locales = ['en', 'sv', 'de'] as const;
export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  sv: 'Svenska',
  de: 'Deutsch',
};
```

2. Create a new dictionary file: `lib/dictionaries/de.json`
3. Update `middleware.ts` if needed
4. Add the locale to `generateStaticParams` in `app/[locale]/layout.tsx`

## Best Practices

1. **Keep translations organized**: Group related translations in logical sections
2. **Use descriptive keys**: Make keys self-explanatory (e.g., `navigation.home` not just `home`)
3. **Maintain consistency**: Use the same key structure across all dictionary files
4. **Handle missing translations**: The system falls back to Swedish for missing translations
5. **Type safety**: Use the `Dictionary` type for better TypeScript support

## URL Structure

- Swedish (default): `/` → `/sv`
- English: `/en`
- Localized pages: `/sv/kontakt`, `/en/contact`

## Performance

- Dictionaries are loaded server-side for better performance
- Static generation for all locale combinations
- Client-side locale switching without full page reloads

## Testing

Test your localization by:
1. Visiting `/` (should redirect to `/sv`)
2. Visiting `/en` (should show English content)
3. Using the locale switcher to switch between languages
4. Checking that all content is properly translated