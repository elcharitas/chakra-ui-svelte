<script>
	import Box from '$lib/components/Box.svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';

	const events = eventsForward(current_component);

	export let spacing = 2;
	export let orientation = 'horizontal';
</script>

<Box as="div" apply="Flex" {spacing} flexDirection={orientation} {events} {...$$props}>
	<slot />
</Box>
