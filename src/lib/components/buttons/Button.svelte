<script>
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';

	import Box from '$lib/components/basic/Box.svelte';

	const events = eventsForward(current_component);
</script>

<Box as="button" apply="Button" {events} variant="solid" {...$$props}>
	<slot />
</Box>
