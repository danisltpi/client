import { fetchPageContent } from '$lib/sanity';
import type { PageServerLoad } from './$types';

const allowedSlugs = ['ueber-uns', 'mach-mit'];

export const load: PageServerLoad = async ({ params }) => {
	if (!allowedSlugs.includes(params.slug)) {
		return {
			status: 404
		};
	}
	return { pageContent: await fetchPageContent(params.slug) };
};
