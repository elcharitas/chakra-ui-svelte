import get from 'dash-get';
import { css, toCSSVar, type StyleConfig } from '@chakra-ui/styled-system';
import { themeStore } from '$lib/theme';
import type { ChakraAction, ChakraComponentProps } from '$lib/types';
import { system, cx } from './emotion';
import { runIfFn, filter } from '$lib/utils';

/**
 * Creates and return a class based on a components props
 *
 * @param props
 */
export function createStyle<T extends ChakraComponentProps>({ sx, apply, ...props }: T) {
	const currentTheme = themeStore.get();
	const themeVars = toCSSVar(currentTheme);

	/** TODO: handle responsive values as well */
	const applyVal = apply?.toString() || '';
	const applyAs = applyVal.includes('.') ? applyVal : `components.${applyVal}`;

	const { defaultProps, ...config }: StyleConfig = get(currentTheme, applyAs) || {};
	const { size, variant, ...safeProps } = { ...defaultProps, ...props };

	const style = css({
		...config.baseStyle,
		...config.sizes?.[size],
		...runIfFn(config.variants?.[variant], safeProps)
	})(themeVars);

	const customStyle = css({
		...safeProps,
		...sx
	})(themeVars);

	return cx(system(style), system(customStyle), safeProps.class as string);
}

/**
 * Base action to style nodes
 *
 * @param node
 * @param props
 */
export const chakra: ChakraAction = (node, props) => {
	const nodeAttrs = Object.getOwnPropertyNames(Object.getPrototypeOf(node));
	const update = (newProps: typeof props) => {
		const validProps = filter(newProps, (_, key) => !nodeAttrs.includes(String(key)));
		const className = createStyle(validProps);
		node.className = className;
	};

	// onMount, set initial class
	update(props);

	return { update };
};
