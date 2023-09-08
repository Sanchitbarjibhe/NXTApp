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
      screens: {
        xs: "300px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        display: ["Spartan", "sans-serif"],
      },
      gridTemplateColumns: {
        body: "96px 1fr",
        card: "5rem 9rem 1fr min-content min-content min-content",
      },
      gridTemplateRows: {
        mobile: "80px 1fr",
      },
      colors: {
        primaryOne: '#353535',
        primaryTwo: '#232323',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
