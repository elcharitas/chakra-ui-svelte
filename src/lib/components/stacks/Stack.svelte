<script lang='ts'>
	import Box from '$lib/components/Box.svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';

	const events = eventsForward(current_component);

	export const spacing: number = 2;
	export const orientation: 'horizontal' | 'vertical' = 'horizontal';
</script>

<Box as="div" apply="Flex" flexDirection={orientation} {events} {...$$props}>
	<slot />
</Box>
