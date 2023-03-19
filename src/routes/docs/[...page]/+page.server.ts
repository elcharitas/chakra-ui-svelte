import { error } from '@sveltejs/kit';
import { existsSync } from 'fs';

export const prerender = true;

export async function load({ params }) {
	if (existsSync(`src/routes/docs/pages/${params.page}.md`)) {
		return {
			slug: params.page
		};
	}
	throw error(404, 'Not found');
}
