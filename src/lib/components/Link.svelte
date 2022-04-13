<script>
	import Box from './Box.svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';

	const events = eventsForward(current_component);
	export let href = '#';
</script>

<Box as="a" apply="Link" props={{ href }} {events} {...$$props}>
	<slot />
</Box>
