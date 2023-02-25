<script>
	import { forwardEvents } from '$lib/core';
	import Box from './Box.svelte';

	const events = forwardEvents();
</script>

<Box {events} mx="auto" {...$$props}>
	<slot />
</Box>
