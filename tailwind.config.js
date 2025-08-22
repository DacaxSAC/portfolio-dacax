/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}