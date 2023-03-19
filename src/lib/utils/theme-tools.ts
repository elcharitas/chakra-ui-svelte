import type { Theme } from '$lib/theme';
type Dict = Record<string, unknown>;

/**
 * Returns the value based on current theme color mode.
 *
 * @param light
 * @param dark
 * @returns
 */
export const mode = <T>(light: T, dark: T): ((properties) => T) => (properties) =>
	properties.colormode == 'dark' ? dark : light;

export const getColor = (theme: Dict, color: string, fallback?: string) => {
	return theme?.colors[color] || fallback;
};

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
			.replace(/([\da-f]{2})/g, '$1 ')
			.trim() +
		' ' +
		opacity
	);
};
