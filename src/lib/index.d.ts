import type { SvelteComponentTyped } from 'svelte';
import { ChakraComponentProps, PropVariant } from './types';

/**
 * ThemeProvider is the root component that provides theming to all other Chakra components.
 */
export class ThemeProvider extends SvelteComponentTyped<{ theme: object }> {}
/**
 * ChakraProvider is the root component that provides context to all other Chakra components.
 * It is the equivalent of `ChakraProvider` in `@chakra-ui/react`.
 * It is required for all Chakra components to work.
 * @deprecated
 */
export class ChakraProvider extends ThemeProvider {}

/**
 * Box is a generic component that can be used to render any HTML element.
 * It is the root component for all other Chakra components.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Box<T extends Record<string, any> = never> extends SvelteComponentTyped<
	T & ChakraComponentProps
> {}
export class Button extends Box<HTMLButtonElement> {
	variant: PropVariant;
}
export class ButtonGroup extends Box {}
export class Code extends Box {}
export class Divider extends Box {}
export class Flex extends Box {}
export class FormControl extends Box {
	variant: PropVariant;
}
export class FormLabel extends Box {}
export class Grid extends Box {}
export class Heading extends Box {}
export class Icon extends Box<HTMLOrSVGElement> {}
export class Image extends Box<HTMLImageElement> {}
export class Input extends Box<HTMLInputElement> {
	variant: PropVariant;
}
export class CheckBox extends Input {}
export class Label extends Text {}
export class Link extends Box<HTMLAnchorElement> {}
export class List extends Box<HTMLUListElement> {}
export class ListItem extends Box<HTMLLIElement> {}
export class Logo extends Icon {}
export class Menu extends Box {}
export class MenuButton extends Button {}
export class MenuItem extends Box {}
export class Modal extends Box {}
export class Nav extends Box {}
export class Page extends Box {}
export class Popover extends Box {}
export class Progress extends Box {}
export class Radio extends Input {}
export class Select extends Box<HTMLSelectElement> {}
export class Stack extends Flex {}
export class HStack extends Stack {}
export class VStack extends Stack {}
export class Switch extends Box {}
export class Text extends Box<HTMLSpanElement> {}
export class Textarea extends Box<HTMLTextAreaElement> {}
export class Tooltip extends Box {}
export class VisuallyHidden extends Box {}
export class AsyncSelect extends Box {}
export class Avatar extends Image {}
export class Badge extends Box {}

export * from './core';
export * from './theme';
export * from './utils';
export * from './stores';
