<script>
	import { forwardEvents } from '$lib/core';
	import Box from './Box.svelte';

	const events = forwardEvents();
</script>

<Box as="section" {events} mx="auto" {...$$props}>
	<slot />
</Box>
