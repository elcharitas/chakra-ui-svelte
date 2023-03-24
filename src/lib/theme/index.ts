import { createStore } from '$lib/utils';

import core from './core';
import { styles } from './styles';
import * as components from './components';
import type { ThemeConfig } from './theme.types';

const config: ThemeConfig = {
	useSystemColorMode: false,
	initialColorMode: 'light',
	cssVarPrefix: 'chakra'
};

export type Theme = typeof theme;

export const theme = {
	...core,
	...config,
	components,
	styles
};

export const themeStore = createStore<Theme>(() => theme);
themeStore.subscribe((newTheme) => {
	Object.assign(theme, newTheme);
});

export * from './theme.types';
export default theme;
