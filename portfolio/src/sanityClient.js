import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ss24305h',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Fetch all site settings
export async function fetchSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

// Fetch all portfolio photos, ordered
export async function fetchPhotos() {
  return client.fetch(`*[_type == "portfolioPhoto"] | order(order asc) { _id, title, image, order }`);
}

// Fetch all portfolio videos, ordered
export async function fetchVideos() {
  return client.fetch(`*[_type == "portfolioVideo"] | order(order asc) { _id, title, "videoUrl": videoFile.asset->url, order }`);
}
