import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type FlexProps = ChakraComponentProps & {
	direction?: FlexProps['flexDirection'];
};
export default class Flex extends SvelteComponentTyped<FlexProps> {}
