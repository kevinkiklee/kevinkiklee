import Typography from "typography";
import sutroTheme from 'typography-theme-sutro'
import CodePlugin from 'typography-plugin-code'

sutroTheme.plugins = [
  new CodePlugin(),
]

sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3': {
    marginTop: rhythm(2),
  }
})

const typography = new Typography(sutroTheme)

export default typography;
