import { pageLinks } from '$lib/data/page-links';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = () => {
	return { pageLinks };
};
