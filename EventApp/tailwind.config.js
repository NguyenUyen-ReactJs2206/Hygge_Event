/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      camaufalge: 'NVN Camaufalge'
    },
    extend: {
      colors: {
        blueFooterOne: '#0173B5',
        blueFooterTwo: '#4F89C1',
        blue: '#0073B5',
        gray: '#4c4c4c'
      },
      backgroundImage: {
        banner: 'url(https://cdn0.weddingwire.ca/vendor/3632/3_2/960/jpg/1p2a3080_50_3632-161117907430780.jpeg)',
        strengths: 'url(https://meijerroses.com/wp-content/uploads/2016/02/event-flower-design-floral-wedding-arch.jpg)'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('flowbite/plugin')
  ]
}
