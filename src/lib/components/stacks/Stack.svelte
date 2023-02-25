<script>
	import Flex from './Flex.svelte';
	import { forwardEvents } from '$lib/core';

	const events = forwardEvents();

	export const spacing = 2;
	export const orientation = null;
</script>

<Flex gap={spacing} direction={orientation === 'vertical' ? 'column' : 'row'} {events} {...$$props}>
	<slot />
</Flex>
