import { fetchArticleCards } from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const articles = await fetchArticleCards();
	return {
		articles: articles
	};
};
