<script>
	import Box from './Box.svelte';
	import { current_component } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';

	const events = forwardEvents(current_component);
	export let href = '#';
</script>

<Box as="a" apply="Link" props={{ href }} {events} {...$$props}>
	<slot />
</Box>
