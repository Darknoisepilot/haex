// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6F7FF',
          100: '#E9ECFF',
          200: '#CAD4FF',
          300: '#A9BBFF',
          400: '#7D98FF',
          500: '#3F69FF',
          600: '#2F4FDB',
          700: '#263FAD',
          800: '#1E3288',
          900: '#182A6C',
        },
        paper: '#000000',
        ink: '#E5E7EB',
      },
      spacing: {
        '1.5': '0.375rem',
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '9': '2.25rem',
        '18': '4.5rem',
      },
      borderRadius: {
        xl: 'var(--radius)',
        '2xl': '1.5rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
