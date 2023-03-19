import { error } from '@sveltejs/kit';
import { existsSync } from 'node:fs';

export async function load({ params }: { params: Record<string, string> }) {
	if (existsSync(`src/routes/docs/pages/${params.page}.md`)) {
		return {
			slug: params.page
		};
	}
	throw error(404, 'Not found');
}
