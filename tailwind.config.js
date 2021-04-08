module.exports = {
  darkMode: 'media',
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
    content: ['./src/**/*.njk', './src/js/modules/**/*.js', './.eleventy.js'],
  },
};
