import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type StackProps = ChakraComponentProps & {
	spacing?: StackProps['gap'];
	orientation?: 'vertical' | 'horizontal';
};
export default class VStack extends SvelteComponentTyped<StackProps> {}
