export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    background: {
      light: '#ffffff',
      dark: '#0a0a0a',
    },
    text: {
      light: '#171717',
      dark: '#ededed',
    }
  },
  fonts: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
    heading: 'var(--font-geist-sans)',
    body: 'var(--font-geist-sans)',
  },
  spacing: {
    header: '80px', // Altura del header para scroll-padding
  },
  transitions: {
    base: '0.2s ease-in-out',
    smooth: '0.3s ease-out',
    slow: '0.5s ease-in-out',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}
