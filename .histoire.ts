import { defineConfig, defaultColors } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	tree: {
		groups: [
			{
				id: 'top',
				title: 'Basics'
			},
			{
				id: 'components',
				title: 'Components'
			},
			{
				id: 'utils',
				title: 'Utilities'
			}
		]
	},
	theme: {
		title: 'Chakra UI Svelte',
		logoHref: 'https://chakra-ui-svelte.vercel.app',
		colors: {
			primary: defaultColors.green
		},
		logo: {
			square: './assets/logo-square.svg',
			dark: './assets/logo-dark.svg',
			light: './assets/logo-light.svg'
		}
	},
	plugins: [HstSvelte()]
});
