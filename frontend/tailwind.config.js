/* global module */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bluegray' : colors.blueGray,
        'mycyan' : '#9EF0F0',
        'myviolet': '#8A3FFC',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      transform: ['hover','active'],
      translate: ['hover','active'],
      boxShadow: ['active'],
      backgroundColor: ['active'],
      backgroundOpacity: ['active'],
      borderRadius : ['hover'],
      inset : ['hover'],
      textColor: ['hover','active'],
      fontWeight: ['hover', 'focus'],
      
    }
  },
  plugins: [
      require('tailwindcss-elevation')(['responsive','hover']),  
  ],
}
