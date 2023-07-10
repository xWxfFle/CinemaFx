/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
    },
  },

  daisyui: {
    themes: ['cupcake'],
  },

  plugins: [require('daisyui')],
}
