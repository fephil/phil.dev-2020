const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getSiteSettings() {
  const filter = groq`*[_type == "siteSettings"]`;
  const projection = groq`{
    _id,
    title,
    description,
    keywords,
  }[0]`;
  const query = [filter, projection].join(' ');

  const getData = await client.fetch(query).catch(err => console.error(err));
  return getData;
}

module.exports = getSiteSettings
