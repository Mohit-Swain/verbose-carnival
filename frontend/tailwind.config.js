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
        'violet' : colors.violet
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderWidth: {
        '60' : '3rem'
      },
      flex: {
        'divide' : '1 1 50%'
      }
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
      fontSize: ['hover'],
      opacity: ['disabled']
    }
  },
  plugins: [
      require('tailwindcss-elevation')(['responsive','hover']),
      require('@tailwindcss/forms'),  
  ],
}
