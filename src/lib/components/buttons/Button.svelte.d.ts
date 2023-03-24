import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type ButtonProps = ChakraComponentProps & {
	/**
	 * The styled variant of the button.
	 *
	 * @default solid
	 */
	variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled';
};
export default class Button extends SvelteComponentTyped<ButtonProps> {}
