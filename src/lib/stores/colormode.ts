import { writable } from 'svelte/store';
import { createStore } from '$lib/utils/index.js';
import { browser } from '$app/env';

export const colorMode = createStore<'light' | 'dark'>(() => {
	const option = browser ? window.matchMedia('(prefers-color-scheme: dark)') : null;
	return option?.matches ? 'dark' : 'light'; // default to light mode
});

/**
 * Here is a function similar to useColorModeValue
 *
 * @param light
 * @param dark
 * @returns
 */
export const colorModeValue = (light: unknown, dark: unknown) => {
	const store = writable(light);
	colorMode.subscribe((val) => {
		store.set(val === 'light' ? light : dark);
	});
	return store;
};
