const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getHomepage() {
  const filter = groq`*[_type == "homepage"]`;
  const projection = groq`{
    _id,
    title
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
