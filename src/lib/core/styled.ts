import { css, toCSSVar, type StyleProps } from '@chakra-ui/styled-system';
import { theme } from '$lib/theme';
import { system, cx } from './emotion';
import { filter } from '../utils/object';
import type { ChakraAction, ChakraComponentProps } from '$lib/types';

/**
 * A Chakra UI Svelte component can be created to inherit styles using the `apply` prop.
 * This util allows easy generation of styles based on the value of the `apply` prop.
 * This styles can then be converted into classes later on
 *
 * @param props
 */
export function extractComponentStyles(props) {
	let componentStyles = {
		colorScheme: props.colorScheme
	};
	const component = theme?.components[props.apply || props.as];
	if (typeof component === 'object') {
		const { baseStyle, variants, sizes, defaultProps } = component;
		const { variant = defaultProps?.variant, size = defaultProps?.size } = props;
		const sizeStyle = sizes?.[size];
		if (!componentStyles.colorScheme) {
			componentStyles.colorScheme = defaultProps?.colorScheme;
		}
		componentStyles = {
			...componentStyles,
			...baseStyle,
			...sizeStyle,
			...variants?.[variant]?.(componentStyles)
		};
	}
	return componentStyles;
}

/**
 * Creates and return a class based on a components props
 *
 * @param props
 */
export function createStyle<T extends ChakraComponentProps>(props: T) {
	const themeVars = toCSSVar(theme);
	const componentCSS = css(props)(themeVars);
	const sxCss = css(props.sx)(themeVars);
	return cx(system(componentCSS), system(sxCss), props.class);
}

/**
 * Creates and return a class based on a components props and it's applied style
 *
 * @param props
 */
export function createClass<T extends ChakraComponentProps>(props: T, ...classList: string[]) {
	const safeProps = filter<T>(
		props,
		(value, key) => typeof value !== 'function' || key in ['as', 'wrap']
	);
	const themeVars = toCSSVar(theme);
	const componentStyles = extractComponentStyles(props);
	const baseCSS = css(safeProps)(themeVars);
	const sxCss = css(safeProps.sx || {})(themeVars);
	const componentCSS = css(componentStyles)(themeVars);
	return cx(system(componentCSS), system(baseCSS), system(sxCss), ...classList);
}

/**
 * Base action to style nodes
 *
 * @param node
 * @param props
 */
export const chakra: ChakraAction = (node, props) => {
	const update = (newProps: typeof props) => {
		const className = createClass(newProps, newProps.class);
		node.className = className;
	};

	// onMount, set initial class
	update(props);

	return { update };
}
