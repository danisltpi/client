import { fetchArticleContent } from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return { articleContent: await fetchArticleContent(params.slug) };
};
