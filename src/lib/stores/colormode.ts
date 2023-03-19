import { derived } from 'svelte/store';
import { createStore } from '$lib/utils';

type ColorMode = 'light' | 'dark';

export const colorMode = createStore<ColorMode>(
	() => {
		const mode: ColorMode = 'light';

		if (typeof window !== 'undefined') {
			/** When running in histoire, it seems `window` is defined but it's props aren't implemented
			 * Thus we need to catch this error by assuming all window APIs are undefined.
			 * This is a quick fix till we can get something better.
			 */
			const storage = window?.localStorage?.getItem('chakra-ui-color-mode') === 'dark';

			return storage ? 'dark' : 'light';
		}

		return mode;
	},
	(mode) => {
		if (typeof window !== 'undefined') {
			window?.localStorage?.setItem('chakra-ui-color-mode', mode);
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
export const colorModeValue = <T>(light: T, dark: T) => {
	const store = createStore(() => light);
	colorMode.subscribe((value) => {
		store.set(value === 'light' ? light : dark);
	});
	return store;
};
