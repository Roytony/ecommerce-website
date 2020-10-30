const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    defaultLineHeights: true,
    extendedSpacingScale: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
    removeDeprecatedGapUtilities: true,
  },
  // Configure Purge CSS
  purge: {
      content: [
          // add views here
          //'./resources/views/**/*.html'
      ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
