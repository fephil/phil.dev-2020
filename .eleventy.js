const htmlmin = require('html-minifier');
const blocksToHtml = require('@sanity/block-content-to-html');
const serializers = require('./src/_utils/serializers');
const getImage = require('./src/_utils/getImage');

const isProduction = process.env.ELEVENTY_ENV === 'production';

module.exports = function (config) {
  // Layout Aliases
  config.addLayoutAlias('base', 'layouts/base.njk');
  config.addLayoutAlias('placeholder', 'layouts/placeholder.njk');

  // Transforms
  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html') && isProduction) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  // Assets
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy({ public: '/' });

  // Shortcodes
  // ...

  // Filters
  config.addFilter('sanityHTML', function (value) {
    return blocksToHtml({
      blocks: value,
      serializers: serializers,
    });
  });

  config.addFilter('getImage', function (value) {
    return getImage(value).auto('format').quality(80).url();
  });

  // Collections
  // ...

  // Plugins
  // ...

  return {
    dir: {
      input: 'src',
      output: '_site',
      data: '_data',
      includes: '_includes',
    },
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
