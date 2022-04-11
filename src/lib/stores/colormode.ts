import { createStore } from '$lib/utils/store';

export const colorMode = createStore<'light' | 'dark'>('color-mode', (mode) => {
	const option = window.matchMedia('(prefers-color-scheme: dark)');
	const matches = option.matches || mode === 'dark';
	return matches ? 'dark' : 'light'; // default to light mode
});
