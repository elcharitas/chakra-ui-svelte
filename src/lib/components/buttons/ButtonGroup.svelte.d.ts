import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type ButtonGroupProps = ChakraComponentProps & {
	/**
	 * The space between each button
	 */
	spacing?: ButtonGroupProps['gap'];
};
export default class ButtonGroup extends SvelteComponentTyped<ButtonGroupProps> {}
