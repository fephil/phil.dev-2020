module.exports = {
  purge: [],
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
    mode: 'all',
    content: [
      './src/**/*.njk',
      './.eleventy.js',
    ]
  },
}
