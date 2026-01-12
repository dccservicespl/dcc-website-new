/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#fb9902',
        'brand-dark': '#e58a00',
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}

