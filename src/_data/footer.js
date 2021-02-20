const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getFooter() {
  const filter = groq`*[_type == "footer"]`;
  const projection = groq`{
    business
  }[0]`;
  const query = [filter, projection].join(' ');

  const getData = await client.fetch(query).catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  });

  return getData;
}

module.exports = getFooter;
