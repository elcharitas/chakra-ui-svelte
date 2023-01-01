import { css, toCSSVar } from '@chakra-ui/styled-system';
import { theme } from '$lib/theme';
import { system, cx } from './emotion';

/**
 * A Chakra UI Svelte component can be created to inherit styles using the `apply` prop.
 * This util allows easy generation of styles based on the value of the `apply` prop.
 * This styles can then be converted into classes later on
 *
 * @param props
 * @returns
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
			...variants?.[variant](componentStyles)
		};
	}
	return componentStyles;
}

/**
 * Creates and return a class based on a components props
 *
 * @param props
 * @returns
 */
export function createStyle(props) {
	const themeVars = toCSSVar(theme);
	const componentCSS = css(props)(themeVars);
	const sxCss = css(props.sx)(themeVars);
	return cx(system(componentCSS), system(sxCss), props.class);
}

/**
 * Creates and return a class based on a components props and it's applied style
 *
 * @param props
 * @returns
 */
export function createClass(props, ...classList: string[]) {
	const themeVars = toCSSVar(theme);
	const componentStyles = extractComponentStyles(props);
	const baseCSS = css(props)(themeVars);
	const sxCss = css(props.sx || {})(themeVars);
	const componentCSS = css(componentStyles)(themeVars);
	return cx(system(componentCSS), system(baseCSS), system(sxCss), ...classList);
}

/**
 * Base action to style nodes
 *
 * @param node
 * @param props
 * @returns
 */
export function chakra<T>(node: HTMLElement, props: T) {
	function update(props) {
		const className = createClass(props, props.class);
		node.className = className;
	}

	update(props);

	return { update };
}
