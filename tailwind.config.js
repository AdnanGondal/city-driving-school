/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': colors.blue[600],
        'brand-baby-blue': colors.blue[50],
        'brand-red': colors.red[600],
        'brand-gray': colors.gray[600]
      }
    },
  },
  plugins: [],
}

