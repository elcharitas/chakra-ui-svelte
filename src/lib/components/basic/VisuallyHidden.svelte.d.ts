import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type VisuallyHiddenProps = ChakraComponentProps;
export default class VisuallyHidden extends SvelteComponentTyped<VisuallyHiddenProps> {}
