import { fetchArticleCards } from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		articles: await fetchArticleCards()
	};
};
