const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getSiteSettings() {
  const filter = groq`*[_type == "siteSettings"]`;
  const projection = groq`{
    globalTitle,
    description,
    keywords,
    availability,
    contact,
    business
  }`;
  const query = [filter, projection].join(' ');

  const getData = await client.fetch(query).catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  });

  const firstItem = getData[0];
  return firstItem;
}

module.exports = getSiteSettings;
