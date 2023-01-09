/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   'sans': ['Proxima Nova', ],
    //   display: ['Roboto']
    // },
    extend: {},
    colors: {
      primary: {
        default: 'rgb(255, 81, 81)',
        light: 'rgb(245, 148, 148)',
        dark: 'rgb(248, 47, 47)'
      },
      gray: colors.gray,
      white: colors.white,
      black: colors.black
    }
  },
  plugins: [],
}
