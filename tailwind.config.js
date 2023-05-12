/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.{html,js}", "./src/**/*.{html,js}", "./portal/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
      'dm-sans'  : ['DM Sans', 'sans-serif'],
      'source-serif': ['Source Serif Pro', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
      sans : ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-clr': '#F07605',
        'primary-clr-100': '#F99A43',
        'secondary-clr': '#FFF5EB',
        'dark-800': '#262626',
        'darker-700': '#333333',
        'dark-600': '#454545',
        'dark-500': '#858585',
        'light-400': '#D6D6D6',
        'light-300': '#F4F4F4',
      },
    },
  },
  plugins: [ ],
}