<script>
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Box from './Box.svelte';

	const events = eventsForward(current_component);
</script>

<Box {events} mx="auto" {...$$props}>
	<slot />
</Box>
