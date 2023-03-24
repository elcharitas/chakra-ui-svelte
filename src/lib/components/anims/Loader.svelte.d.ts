import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type LoaderProps = ChakraComponentProps & {
	size?: LoaderProps['inlineSize'];
};
export default class Loader extends SvelteComponentTyped<LoaderProps> {}
