import type { SvelteComponentTyped } from 'svelte';
import colors from './theme/core/colors';

type PropValue<T = number> = T | string;
type isPropValue = 'true' | 'false' | boolean;
type PropValueArray<T = number> = PropValue<T>[];
type PropSizes = PropValue<'small' | 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>;
type PropSizesDict<T = number> = { [key in PropSizes]: PropValue<T> };
type PropColor = PropValue<'inherit' | 'initial' | 'currentColor'> | keyof typeof colors;
type PropVariant = PropValue<'solid' | 'outline' | 'link'>;
type PropDimension = PropValue<'full' | PropSizes | number>;

type DimProps =
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

type DimensionProps = {
	[prop in DimProps]: PropDimension | PropValueArray<PropDimension> | PropSizesDict<PropDimension>;
};

type ChakraComponentProps = DimensionProps & {
	as?: keyof HTMLElementTagNameMap | SvelteComponentTyped;
	wrap: boolean | keyof HTMLElementTagNameMap;
	size?: PropSizes;
	fontSize?: PropSizes;
	fontFamily?: PropValue<string>;
	fontWeight?: PropValue;
	color?: PropColor;
	bg?: PropColor;
	borderColor?: PropColor;
	borderWidth?: PropDimension;
	borderStyle?: PropValue<'solid' | 'dashed' | 'dotted' | 'double'>;
	borderRadius?: PropDimension;
	boxShadow?: PropValue<string>;
	opacity?: PropValue<number>;
	hidden?: isPropValue;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Box<T extends Record<string, any> = never> extends SvelteComponentTyped<
	T & ChakraComponentProps
> {}
export class Button extends Box<HTMLButtonElement> {
	variant?: PropVariant;
}
export class ButtonGroup extends Box {}
export class Code extends Box {}
export class Divider extends Box {}
export class Flex extends Box {}
export class FormControl extends Box {
	variant?: PropVariant;
}
export class FormLabel extends Box {}
export class Grid extends Box {}
export class Heading extends Box {}
export class Icon extends Box {}
export class Image extends Box {}
export class Input extends Box {
	variant?: PropVariant;
}
export class CheckBox extends Input {}
export class Label extends Text {}
export class Link extends Box {}
export class List extends Box {}
export class ListItem extends Box {}
export class Logo extends Icon {}
export class Menu extends Box {}
export class MenuButton extends Button {}
export class MenuItem extends Box {}
export class Modal extends Box {}
export class Nav extends Box {}
export class Page extends Box {}
export class Popover extends Box {}
export class Progress extends Box {}
export class Radio extends Box {}
export class Select extends Box {}
export class Stack extends Flex {}
export class HStack extends Stack {}
export class VStack extends Stack {}
export class Switch extends Box {}
export class Text extends Box {}
export class Textarea extends Box {}
export class Tooltip extends Box {}
export class VisuallyHidden extends Box {}
export class AsyncSelect extends Box {}
export class Avatar extends Box {}
export class Badge extends Box {}

export * from './core';
export * from './theme';
export * from './utils';
export * from './stores';
