module.exports = {
  theme: {
    fontFamily: {
      heading: ['Domine', 'serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      './src/**/*.njk',
      './.eleventy.js',
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
