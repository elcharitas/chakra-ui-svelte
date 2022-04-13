import { css, toCSSVar } from '@chakra-ui/styled-system';
import { theme } from '$lib/theme/index.js';
import { system, cx } from './emotion.js';

export function styled<T>(node: HTMLElement, props: T) {
	function update(props) {
		const className = createClass(props, props.class);
		node.className = className;
	}

	update(props);

	return { update };
}

export function createClass(props, ...classList: string[]) {
	const themeVars = toCSSVar(theme);
	const componentStyles = {
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
		Object.assign(componentStyles, {
			...baseStyle,
			...sizeStyle,
			...variants?.[variant](componentStyles)
		});
	}
	const baseCSS = css(props)(themeVars);
	const componentCSS = css(componentStyles)(themeVars);
	const baseName = system(baseCSS);
	const componentClassName = system(componentCSS);
	return cx(componentClassName, baseName, ...classList);
}
