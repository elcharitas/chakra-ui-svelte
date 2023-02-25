<script>
	import Box from '$lib/components/basic/Box.svelte';
	import { forwardEvents } from '$lib/core';

	const events = forwardEvents();

	export const direction = 'row';
</script>

<Box as="div" display="flex" flexDirection={direction} flexWrap="wrap" {events} {...$$props}>
	<slot />
</Box>
