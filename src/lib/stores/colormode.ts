import { derived } from 'svelte/store';
import { createStore } from '$lib/utils/index.js';

type ColorMode = 'light' | 'dark';

export const colorMode = createStore<ColorMode>(
	() => {
		let mode: ColorMode = 'light';

		if (typeof window !== 'undefined') {
			const system = window?.matchMedia('(prefers-color-scheme: dark)').matches;
			const storage = window?.localStorage.getItem('chakra-ui-color-mode') === 'dark';

			system || storage ? 'dark' : 'light';
		}

		return mode;
	},
	(mode) => {
		if (typeof window !== 'undefined') {
			window?.localStorage.setItem('chakra-ui-color-mode', mode);
		}
	}
);

/** Checks if current colorMode is 'dark' or 'light' */
export const isDarkMode = derived(colorMode, (colorMode) => colorMode === 'dark');

/**
 * Here is a function similar to useColorModeValue
 *
 * @param light
 * @param dark
 * @returns
 */
export const colorModeValue = (light: unknown, dark: unknown) => {
	const store = createStore(() => light);
	colorMode.subscribe((val) => {
		store.set(val === 'light' ? light : dark);
	});
	return store;
};
