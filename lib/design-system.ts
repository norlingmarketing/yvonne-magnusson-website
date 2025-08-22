export const colors = {
  primary: {
    dark: '#2D3436', // Dark gray
    DEFAULT: '#2C5F7C', // Professional teal
    light: '#4A7C99',
  },
  surface: {
    white: '#FFFFFF',
    offWhite: '#FAFAFA',
    light: '#F5F5F5',
  },
  accent: {
    warm: '#D4A574', // Sand
    warmLight: '#E5C09A',
    warmDark: '#B8895C',
  },
  text: {
    primary: '#1A1A1A', // Charcoal
    secondary: '#6B7280',
    light: '#9CA3AF',
  },
  border: {
    DEFAULT: '#E5E7EB',
    light: '#F3F4F6',
  },
  success: '#10B981',
  error: '#EF4444',
}

export const typography = {
  fonts: {
    serif: 'Playfair Display, Georgia, serif',
    sans: 'Inter, system-ui, sans-serif',
    accent: 'DM Sans, system-ui, sans-serif',
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    snug: 1.4,
    normal: 1.6,
    relaxed: 1.8,
  },
}

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  easing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
}