<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Flex from './Flex.svelte';
	import type { StackProps } from './Stack.svelte';

	type $$Props = StackProps;
	const events = forwardEvents();

	export const spacing = 2;
	export const orientation: $$Props['orientation'] = undefined;
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
