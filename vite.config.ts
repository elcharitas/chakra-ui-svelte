import { sveltekit } from '@sveltejs/kit/vite';
import svelteMd from 'vite-plugin-svelte-md';
import { resolve } from 'node:path';
import type { UserConfig } from 'vite';
import mdHighlight from 'markdown-it-highlightjs';

const config: UserConfig = {
	plugins: [svelteMd({ markdownItUses: [mdHighlight] }), sveltekit()],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$docs: resolve('./src/docs')
		}
	}
};

export default config;
