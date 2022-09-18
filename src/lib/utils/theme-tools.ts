import type { Theme } from '$lib/theme';

/**
 * Returns the value based on current theme color mode.
 *
 * @param light
 * @param dark
 * @returns
 */
export const mode = (light: unknown, dark: unknown) => (props) =>
	props.colormode == 'dark' ? dark : light;

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
