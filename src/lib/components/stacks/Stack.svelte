<script>
	import Flex from './Flex.svelte';
	import { current_component } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';

	const events = forwardEvents(current_component);

	export const spacing = 2;
	export const orientation = null;
</script>

<Flex gap={spacing} direction={orientation === 'vertical' ? 'column' : 'row'} {events} {...$$props}>
	<slot />
</Flex>
