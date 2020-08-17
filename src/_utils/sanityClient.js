require('dotenv').config();
const sanityClient = require('@sanity/client');

const sanity = {
  projectId: process.env.SANITY_PROJECT,
  dataset: process.env.SANITY_DATASET,
}

module.exports = sanityClient({...sanity, useCdn: !process.env.SANITY_READ_TOKEN, token: process.env.SANITY_READ_TOKEN});
