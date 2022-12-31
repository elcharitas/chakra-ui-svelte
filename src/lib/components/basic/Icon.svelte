<script>
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Box from './Box.svelte';

	const events = eventsForward(current_component);
	export let as = 'svg';
</script>

<Box {as} {events} sx={{ width: '20px' }} {...$$props}>
	<slot />
</Box>
