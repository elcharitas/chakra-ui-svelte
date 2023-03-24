import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type StackProps = ChakraComponentProps & {
	spacing?: StackProps['gap'];
	orientation?: 'vertical' | 'horizontal';
};
export default class HStack extends SvelteComponentTyped<StackProps> {}
