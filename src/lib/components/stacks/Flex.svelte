<script>
	import Box from '$lib/components/basic/Box.svelte';
	import { current_component } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';

	const events = forwardEvents(current_component);

	export const direction = 'row';
</script>

<Box as="div" display="flex" flexDirection={direction} flexWrap="wrap" {events} {...$$props}>
	<slot />
</Box>
