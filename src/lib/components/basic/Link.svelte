<script>
	import Box from './Box.svelte';
	import { forwardEvents } from '$lib/core';

	const events = forwardEvents();
	export let href = '#';
</script>

<Box as="a" apply="Link" props={{ href }} {events} {...$$props}>
	<slot />
</Box>
