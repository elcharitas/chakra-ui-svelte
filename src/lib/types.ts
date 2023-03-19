import type { SvelteComponentTyped } from 'svelte';
import type colors from './theme/core/colors';

export type PropValue<T = number> = T | string;
export type isPropValue = 'true' | 'false' | boolean;
export type PropValueArray<T = number> = PropValue<T>[];
export type PropSizes = PropValue<'small' | 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>;
export type PropSizesDict<T = number> = { [key in PropSizes]: PropValue<T> };
export type PropColor = PropValue<'inherit' | 'initial' | 'currentColor'> | keyof typeof colors;
export type PropVariant = PropValue<'solid' | 'outline' | 'link'>;
export type PropDimension = PropValue<'full' | PropSizes | number>;

export type DimProps =
	| 'w'
	| 'h'
	| 'minH'
	| 'maxH'
	| 'minW'
	| 'maxW'
	| 'width'
	| 'height'
	| 'minWidth'
	| 'minHeight'
	| 'maxWidth'
	| 'maxHeight'
	| 'm'
	| 'mt'
	| 'mr'
	| 'mb'
	| 'ml'
	| 'mx'
	| 'my'
	| 'p'
	| 'pt'
	| 'pr'
	| 'pb'
	| 'pl'
	| 'px'
	| 'py'
	| 'padding'
	| 'paddingTop'
	| 'paddingRight'
	| 'paddingBottom'
	| 'paddingLeft'
	| 'paddingX'
	| 'paddingY'
	| 'margin'
	| 'marginTop'
	| 'marginRight'
	| 'marginBottom'
	| 'marginLeft'
	| 'marginX'
	| 'marginY'
	| 'top'
	| 'right'
	| 'bottom'
	| 'left';

export type DimensionProps = {
	[prop in DimProps]: PropDimension | PropValueArray<PropDimension> | PropSizesDict<PropDimension>;
};

export type ChakraComponentProps = DimensionProps & {
	/**
	 * Optionally render the component as a different element.
	 * Defaults to `div`.
	 */
	as: keyof HTMLElementTagNameMap | SvelteComponentTyped;
	/**
	 * Wrap the component in with a HTML element.
	 * Defaults to `false`.
	 */
	wrap: boolean | keyof HTMLElementTagNameMap;
	size: PropSizes;
	fontSize: PropSizes;
	fontFamily: PropValue<string>;
	fontWeight: PropValue;
	color: PropColor;
	bg: PropColor;
	borderColor: PropColor;
	borderWidth: PropDimension;
	borderStyle: PropValue<'solid' | 'dashed' | 'dotted' | 'double'>;
	borderRadius: PropDimension;
	boxShadow: PropValue<string>;
	opacity: PropValue<number>;
	hidden: isPropValue;
	/** render the component without slots */
	noSlot: boolean;
};
