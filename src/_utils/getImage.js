const imageUrl = require('@sanity/image-url');
const sanityClient = require('./sanityClient');

function getImage(source) {
  return imageUrl(sanityClient).image(source);
}

module.exports = getImage;
