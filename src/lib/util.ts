import { goto } from '$app/navigation';
import type { Slug } from './sanity';

export const gotoArticle = (slug: Slug) => {
	goto('/magazin/' + slug.current);
	return null;
};
