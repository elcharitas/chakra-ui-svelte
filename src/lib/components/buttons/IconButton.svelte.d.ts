import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type IconButtonProps = ChakraComponentProps & {
	/**
	 * The icon to display in the button.
	 */
	icon: IconButtonProps['as'];
};
export default class IconButton extends SvelteComponentTyped<IconButtonProps> {}
