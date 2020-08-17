const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getHomepage() {
  const filter = groq`*[_type == "homepage"]`;
  const projection = groq`{
    _id,
    title
  }`;
  const order = `| order(publishedAt asc)`;
  const query = [filter, projection, order].join(' ');

  const getData = await client.fetch(query).catch(err => console.error(err));

  // We only ever have one homepage so just return first object
  return getData[0];
}

module.exports = getHomepage
