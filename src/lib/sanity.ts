import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SANITY_DATASET, SANITY_PROJECT_ID } from './constants';

export interface Slug {
	_type: string;
	current: string;
}

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: '2023-09-04',
	useCdn: true
});

export const fetchArticleCards = async () => {
	const query = '*[_type == "magazine"] | order(publishedAt desc) {title, caption, image, slug}';
	const articles = await client.fetch(query);
	return articles;
};

export const fetchArticleContent = async (slug: string) => {
	const query = `*[_type == "magazine" && slug.current == '${slug}'][0]{title, caption, image, content}`;
	const content = await client.fetch(query);
	return content;
};

export const fetchPageContent = async (slug: string) => {
	const query = `*[_type == "page" && slug.current == '${slug}'][0]{title, content}`;
	const content = await client.fetch(query);
	return content;
};

export const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
	return builder.image(source).format('webp');
};
