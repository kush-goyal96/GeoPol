/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Inter', 'sans-serif'],
        custom2: ['Playfair Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

