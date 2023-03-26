module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/recommended',
		'prettier'
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs', 'package/*'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'max-lines-per-function': ['error', 50],
		complexity: ['error', 10],
		'max-depth': ['error', 3],
		'max-nested-callbacks': ['error', 3],
		'max-params': ['error', 3],
		'unicorn/prefer-at': ['error', { checkAllIndexAccess: true }],
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/filename-case': [
			'error',
			{
				case: 'kebabCase',
				ignore: ['.*\\.svelte\\.d\\.ts', '.*\\.spec\\.ts']
			}
		],
		'no-undef': 'off'
	},
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	env: {
		browser: true,
		es2021: true,
		node: true
	}
};
