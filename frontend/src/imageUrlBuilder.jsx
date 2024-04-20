import imageUrlBuilder from '@sanity/image-url';
import client from './sanityClient'; // Import your Sanity client

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Function to generate image URLs
function urlFor(source) {
  return builder.image(source);
}

export default urlFor;