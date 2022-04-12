import { createStore } from '$lib/utils/index.js';
import { browser } from '$app/env';

export const colorMode = createStore<'light' | 'dark'>(() => {
	const option = browser ? window.matchMedia('(prefers-color-scheme: dark)') : null;
	return option?.matches ? 'dark' : 'light'; // default to light mode
});
