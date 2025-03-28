// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'space-blue': {
          100: '#cfe1ff',
          200: '#a0c3ff',
          300: '#70a3ff',
          400: '#4183ff',
          500: '#1161fe',
          600: '#0d4cd8',
          700: '#0a3ab0',
          800: '#072988',
          900: '#041b5e',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};