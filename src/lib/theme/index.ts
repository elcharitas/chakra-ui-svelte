import { writable } from 'svelte/store';
import core from './core';
import type { ThemeConfig, ThemeDirection } from './theme.types';

const direction: ThemeDirection = 'ltr';

const config: ThemeConfig = {
	useSystemColorMode: false,
	initialColorMode: 'light',
	cssVarPrefix: 'chakra'
};

export const theme = {
	direction,
	...core,
	config
};

export type Theme = typeof theme;

export const themeStore = writable<Theme>(theme);
themeStore.subscribe((newTheme) => {
	Object.assign(theme, newTheme);
});

export * from './theme.types';
export default theme;
