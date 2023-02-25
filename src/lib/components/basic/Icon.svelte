<script>
	import { current_component } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';
	import Box from './Box.svelte';

	const events = forwardEvents(current_component);
	export let as = 'svg';
</script>

<Box {as} {events} apply="Icon" size="sm" {...$$props}>
	<slot />
</Box>
