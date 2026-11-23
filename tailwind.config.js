/** @type {import('tailwindcss').Config} */
// Theme mirrors the Qeja UI Kit (shadcn/ui) variables in Figma.
// Colours are defined in src/styles/globals.css. Light by default; dark when the visitor picks it (.dark on <html>).
const withAlpha = (name) => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: withAlpha('background'),
        foreground: withAlpha('foreground'),
        card: { DEFAULT: withAlpha('card'), foreground: withAlpha('card-foreground') },
        primary: { DEFAULT: withAlpha('primary'), foreground: withAlpha('primary-foreground') },
        secondary: { DEFAULT: withAlpha('secondary'), foreground: withAlpha('secondary-foreground') },
        muted: { DEFAULT: withAlpha('muted'), foreground: withAlpha('muted-foreground') },
        accent: { DEFAULT: withAlpha('accent'), foreground: withAlpha('accent-foreground') },
        destructive: withAlpha('destructive'),
        ring: withAlpha('ring'),
        // border/input carry their own alpha in dark mode, so they are full colours
        border: 'var(--border)',
        input: 'var(--input)',
        'input-bg': 'var(--input-bg)',
      },
      borderColor: { DEFAULT: 'var(--border)' },
      borderRadius: {
        xl: '14px',
        lg: '10px',
        md: '8px',
        sm: '6px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
