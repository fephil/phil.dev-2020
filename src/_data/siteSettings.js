const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getSiteSettings() {
  const filter = groq`*[_type == "siteSettings"]`;
  const projection = groq`{
    title,
    description,
    keywords,
    availability,
  }[0]`;
  const query = [filter, projection].join(' ');

  const getData = await client.fetch(query).catch(error => {
    console.error(error);
    process.exit(1);
  });

  return getData;
}

module.exports = getSiteSettings
