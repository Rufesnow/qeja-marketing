/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        granite: {
          50: '#F7F7F5',
          100: '#EEEDE9',
          200: '#D9D7D0',
          300: '#B8B4AA',
          400: '#97928A',
          500: '#7A756C',
          600: '#605C55',
          700: '#4A4740',
          800: '#333129',
          900: '#1E1D18',
        },
        forest: {
          400: '#5B9A6D',
          500: '#3D7A50',
          600: '#2D5F3C',
        },
        'rivian-blue': '#3B6B9F',
        compass: {
          DEFAULT: '#DEB526',
          dark: '#C5A020',
        },
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
