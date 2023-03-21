<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Flex from './Flex.svelte';

	type $$Props = ChakraComponentProps & {
		spacing?: $$Props['gap'];
		orientation?: 'vertical' | 'horizontal';
	};
	const events = forwardEvents();

	export const spacing = 2;
	export const orientation: 'vertical' | 'horizontal' | undefined = undefined;
</script>

<Flex
	gap={spacing}
	direction={orientation === 'vertical' ? 'column' : 'row'}
	justifyContent="center"
	{events}
	{...$$restProps}
>
	<slot />
</Flex>
