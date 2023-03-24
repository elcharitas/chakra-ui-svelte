import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type LinkProps = ChakraComponentProps & {
	/**
	 * The URL the link points to.
	 *
	 * Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers.
	 */
	href?: string;
};
export default class Link extends SvelteComponentTyped<LinkProps> {}
