<script lang="ts">
	import Flex from './Flex.svelte';
	import { forwardEvents } from '$lib/core';

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
