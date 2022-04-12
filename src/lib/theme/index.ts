import { writable } from 'svelte/store';

import * as components from './components/index.js';
import core from './core/index.js';
import type { ThemeConfig, ThemeDirection } from './theme.types.js';

const direction: ThemeDirection = 'ltr';

const config: ThemeConfig = {
	useSystemColorMode: false,
	initialColorMode: 'light',
	cssVarPrefix: 'chakra'
};

export const theme = {
	direction,
	components,
	...core,
	config
};

export type Theme = typeof theme;

export const themeStore = writable<Theme>(theme);
themeStore.subscribe((newTheme) => {
	Object.assign(theme, newTheme);
});

export * from './theme.types.js';
export default theme;
