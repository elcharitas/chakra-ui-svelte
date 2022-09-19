const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	},
	features: {
		storyStoreV7: true
	},
	async viteFinal(config) {
		const { config: userConfig } = await loadConfigFromFile(
			path.resolve(__dirname, '../vite.config.ts')
		);

		return mergeConfig(config, {
			...userConfig,
			// manually specify plugins to avoid conflict
			plugins: []
		});
	}
};
