const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getHomepage() {
  const filter = groq`*[_type == "homepage"]`;
  const projection = groq`{
    pageTitle,
    promoImage,
    availableContent,
    unavailableContent,
    block1Title,
    block1Content,
    block2Title,
    block2Content,
    block3Title,
    block3Content,
    partners,
    currentTech
  }[0]`;
  const order = `| order(publishedAt asc)`;
  const query = [filter, projection, order].join(' ');

  const getData = await client.fetch(query).catch(error => {
    console.error(error);
    process.exit(1);
  });

  return getData;
}

module.exports = getHomepage
