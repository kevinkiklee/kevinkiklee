/* eslint-disable space-infix-ops */
import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

const customTheme = {
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
}

const theme = Object.assign({}, parnassusTheme, customTheme)
const typography = new Typography(theme)

export default typography
