import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$docs: resolve('./src/docs')
		}
	}
};

export default config;
