const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: [/\.stories\.js$/, /index\.js$/],
			use: [require.resolve('@storybook/source-loader')],
			include: [path.resolve(__dirname, '../src')],
			enforce: 'pre'
		});
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, '../src/lib'),
			$components: path.resolve(__dirname, '../src/lib/components'),
			$core: path.resolve(__dirname, '../src/lib/core'),
			$stores: path.resolve(__dirname, '../src/lib/stores')
		};
		return config;
	},
	core: {
		builder: 'webpack4'
	}
};
