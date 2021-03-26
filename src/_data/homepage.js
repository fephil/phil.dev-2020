const groq = require('groq');
const client = require('../_utils/sanityClient.js');

async function getHomepage() {
  const filter = groq`*[_type == "homepage"]`;
  const projection = groq`{
    pageTitle,
    avatarImage,
    promoImage {
      ...,
  	  asset->
	  },
    "audioUrl": audio.asset->url,
    projects[]-> {
      title,
      tags,
      featuredCopy,
      featuredImage {
        ...,
        asset->
      },
      linkUrl,
      linkName
    },
    blockContent[]{
      ...,
      children[]{
        ...,
        _type == "dateStartedReference" => {
        	"date": @.date->date,
        }
      }
    },
    availableContent[]{
      ...,
      children[]{
        ...,
        _type == "dateAvailableReference" => {
        	"date": @.date->date,
        }
      }
    },
    unavailableContent[]{
      ...,
      children[]{
        ...,
        _type == "dateAvailableReference" => {
        	"date": @.date->date,
        }
      }
    },
    partners,
    currentTech
  }[0]`;
  const order = `| order(publishedAt asc)`;
  const query = [filter, projection, order].join(' ');

  const getData = await client.fetch(query).catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  });

  return getData;
}

module.exports = getHomepage;
