import { css, toCSSVar } from '@chakra-ui/styled-system';
import { theme } from '$lib/theme';
import { system, cx } from './emotion';

export function styled<T>(node: HTMLElement, props: T) {
	function update(props) {
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
		const generateCSS = css(props)(themeVars);
		const componentCSS = css(componentStyles)(themeVars);
		const baseName = system(generateCSS);
		const componentClassName = system(componentCSS);
		const className = cx(componentClassName, baseName, props.className);

		node.classList.add(className);
	}

	update(props);

	return { update };
}
