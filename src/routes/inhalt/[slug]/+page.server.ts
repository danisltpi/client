import { fetchArticleCardsByCategory } from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const articles = await fetchArticleCardsByCategory(params.slug);
	return {
		articles: articles
	};
};
