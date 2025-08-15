import { theme } from './src/lib/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        sans: [theme.fonts.sans],
        mono: [theme.fonts.mono],
        heading: [theme.fonts.heading],
        body: [theme.fonts.body],
      },
      spacing: {
        header: theme.spacing.header,
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      screens: theme.breakpoints,
    },
  },
  plugins: [],
};

export default config;
