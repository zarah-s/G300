/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      "faded": "#858585",
      "fadedborder": "#F0F0F0",

    },
    container: {
      padding: {
        DEFAULT: "0px",
        xs: "0rem",
        sm: "0rem",
        md: "20px",
        lg: "10px",
        xl: "10px",
        "2xl": "10px",
      },
    },
    backgroundImage: {

    },
    screens: {
      // xxs: "300px",
      xs: "320px",
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}