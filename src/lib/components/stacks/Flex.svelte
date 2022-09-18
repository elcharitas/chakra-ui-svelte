<script lang="ts">
	import Box from '$lib/components/basic/Box.svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';

	const events = eventsForward(current_component);

	export const direction: 'row' | 'column' | 'column-reverse' | 'row-reverse' = 'row';
</script>

<Box as="div" display="flex" flexDirection={direction} flexWrap="wrap" {events} {...$$props}>
	<slot />
</Box>
