import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$components: resolve('./src/components')
				}
			}
		}
	}
};

export default config;
