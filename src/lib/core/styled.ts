import { css, toCSSVar } from '@chakra-ui/styled-system';
import { themeStore } from '$lib/theme';
import type { ChakraAction, ChakraComponentProps } from '$lib/types';
import { system, cx } from './emotion';
import { filter } from '../utils/object';

/**
 * Creates and return a class based on a components props
 *
 * @param props
 */
export function createStyle<T extends ChakraComponentProps>(props: T) {
	const safeProps = filter<T>(
		props,
		(value, key) => typeof value !== 'function' || key in ['as', 'wrap']
	);
	const currentTheme = themeStore.get();
	const themeVars = toCSSVar(currentTheme);
	const componentCSS = css(safeProps)(themeVars);
	const sxCss = css(safeProps.sx)(themeVars);
	return cx(system(componentCSS), system(sxCss), safeProps.class);
}

/**
 * Base action to style nodes
 *
 * @param node
 * @param props
 */
export const chakra: ChakraAction = (node, props) => {
	const update = (newProps: typeof props) => {
		const className = createStyle(newProps);
		node.className = className;
	};

	// onMount, set initial class
	update(props);

	return { update };
};
