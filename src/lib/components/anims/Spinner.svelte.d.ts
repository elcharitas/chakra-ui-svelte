import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type SpinnerProps = ChakraComponentProps & {
	size?: SpinnerProps['width'];
};
export default class Spinner extends SvelteComponentTyped<SpinnerProps> {}
