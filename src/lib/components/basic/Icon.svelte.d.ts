import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type IconProps = ChakraComponentProps & {
	viewBox?: string;
	xmlns?: string;
	fill?: string;
	stroke?: string;
	strokeWidth?: string;
	strokeLinecap?: string;
	strokeLinejoin?: string;
	strokeDasharray?: string;
	strokeDashoffset?: string;
	cx?: string;
	cy?: string;
	r?: string;
};
export default class Icon extends SvelteComponentTyped<IconProps> {}
