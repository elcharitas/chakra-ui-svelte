import { defineConfig, defaultColors } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	tree: {
		groups: [
			{
				id: 'top',
				title: 'About'
			},
			{
				id: 'components',
				title: 'Components',
				include: () => true
			},
			{
				title: 'Utilities',
				include: () => true
			}
		]
	},
	theme: {
		title: 'Chakra UI Svelte',
		logoHref: 'https://chakra-ui-svelte.vercel.app',
		colors: {
			primary: defaultColors.green
		}
	},
	plugins: [HstSvelte()]
});
