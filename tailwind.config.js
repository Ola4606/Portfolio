/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '420px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
        monospace: ["DM Mono", "monospace"],
      },

      colors: {
        main: "#FBF4D7"
      },

     
    },

    
  },
  plugins: [],
}
