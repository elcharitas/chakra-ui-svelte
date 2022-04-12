import { createStore } from '$lib/utils/index.js';

export const colorMode = createStore<'light' | 'dark'>('color-mode', (mode) => {
	const option = window.matchMedia('(prefers-color-scheme: dark)');
	const matches = option.matches || mode === 'dark';
	return matches ? 'dark' : 'light'; // default to light mode
});
