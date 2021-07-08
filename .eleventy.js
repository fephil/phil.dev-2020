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
  config.addShortcode('getImageUrl', (image, width, height) => {
    return getImage(image).width(width).height(height).auto('format').quality(100);
  });

  // Filters
  config.addFilter('sanityHTML', function (value) {
    return blocksToHtml({
      blocks: value,
      serializers: serializers,
    });
  });

  // Collections
  // ...

  // Plugins
  // ...

  // Custom Watch Targets
  // NOTE: This will force eleventy to rebuild when any Javascript changes. Not "hot reloaded" but better than nothing
  config.addWatchTarget('./src/js/');
  config.addWatchTarget('./src/css/');

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
