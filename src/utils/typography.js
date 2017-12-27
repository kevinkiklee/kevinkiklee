/* eslint-disable space-infix-ops */
import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

const customTheme = {
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'PT Sans',
      styles: [
        '700',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
      ],
    }
  ],
}

const theme = Object.assign({}, parnassusTheme, customTheme)
const typography = new Typography(theme)

export default typography
