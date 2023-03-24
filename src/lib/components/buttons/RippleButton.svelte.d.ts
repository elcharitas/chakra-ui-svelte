import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type RippleButtonProps = ChakraComponentProps & {
	/**
	 * Whether the button is currently rippling.
	 */
	isRippling: boolean;
};
export default class RippleButton extends SvelteComponentTyped<RippleButtonProps> {}
