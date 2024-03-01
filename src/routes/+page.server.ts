import { fetchArticleCards } from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = await fetchArticleCards();
	return {
		articles: articles
	};
};
