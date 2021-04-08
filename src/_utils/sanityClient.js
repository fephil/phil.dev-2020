require('dotenv').config();
const sanityClient = require('@sanity/client');

const sanity = {
  projectId: process.env.SANITY_PROJECT,
  dataset: process.env.SANITY_DATASET,
};

module.exports = sanityClient({
  ...sanity,
  apiVersion: '2021-04-08',
  useCdn: !process.env.SANITY_READ_TOKEN,
  token: process.env.SANITY_READ_TOKEN,
});
