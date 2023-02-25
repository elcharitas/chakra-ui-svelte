<script>
	import { forwardEvents } from '$lib/core';
	import Box from './Box.svelte';

	const events = forwardEvents();
	export let as = 'svg';
</script>

<Box {as} {events} apply="Icon" size="sm" {...$$props}>
	<slot />
</Box>
