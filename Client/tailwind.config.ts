/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/**/*.{html,js,tsx,ts,jsx}',
    './pages/**/*.{html,js,tsx,ts,jsx}',
    './common/**/*.{html,js,tsx,ts,jsx}',
    './layouts/**/*.{html,j,tsx,ts,jsx}'
  ],// or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryOne: "#2D2D2D",
        primaryTwo: "#232323",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
