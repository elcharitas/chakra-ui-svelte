import type { SemanticValue, Pseudos } from '@chakra-ui/styled-system';

export type RecursiveProperty<T = string | number> = RecursiveObject<T> | T;

export interface RecursiveObject<T = string | number> {
	[property: string]: RecursiveProperty<T>;
}

export interface ThemeConfig {
	cssVarPrefix?: string;
	useSystemColorMode: boolean;
	initialColorMode: 'light' | 'dark';
}

export type ThemeTransitions = RecursiveObject & {
	property: RecursiveObject;
	easing: RecursiveObject;
	duration: RecursiveObject;
};

export interface ColorHues {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
}

export type Colors = RecursiveObject<Record<string, Partial<ColorHues>> | string>;

export type ThemeDirection = 'ltr' | 'rtl';

interface Typography {
	fonts: RecursiveObject<string>;
	fontSizes: RecursiveObject;
	fontWeights: RecursiveObject;
	letterSpacings: RecursiveObject;
	lineHeights: RecursiveObject;
}

interface Foundations extends Typography {
	borders: RecursiveObject;
	breakpoints: RecursiveObject;
	colors: Colors;
	radii: RecursiveObject;
	shadows: RecursiveObject<string>;
	sizes: RecursiveObject;
	space: RecursiveObject;
	transition: ThemeTransitions;
	zIndices: RecursiveObject;
}

export interface ChakraTheme extends Foundations {
	semanticTokens?: Partial<Record<keyof Foundations, Record<string, SemanticValue<keyof Pseudos>>>>;
	components: RecursiveObject;
	config: ThemeConfig;
	direction: ThemeDirection;
	styles: RecursiveObject;
	layerStyles?: RecursiveObject;
	textStyles?: RecursiveObject;
}
