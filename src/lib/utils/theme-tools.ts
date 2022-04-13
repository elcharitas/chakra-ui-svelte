import type { Theme } from '$lib/theme/index.js';
import { colorMode } from '$lib/stores/index.js';

/**
 * Returns the value based on current theme color mode.
 *
 * @param light
 * @param dark
 * @returns
 */
export const mode = (light: unknown, dark: unknown) => (colorMode.get() == 'light' ? light : dark);

/**
 * Makes colors transparent
 *
 * @param color color to transform
 * @param opacity opacity to apply from 0 to 1
 * @returns
 */
export const transparentize = (color: string, opacity: number) => (theme: Theme) => {
	return (
		theme?.colors[color]
			?.replace(/^#/, '')
			.replace(/([0-9a-f]{2})/g, '$1 ')
			.trim() +
		' ' +
		opacity
	);
};
