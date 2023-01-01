<script>
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Box from './Box.svelte';

	const events = eventsForward(current_component);
	export let as = 'svg';
	export let viewBox = undefined;
	export let width = undefined;
	export let height = undefined;
	export let xmlns = undefined;
</script>

<Box {as} {events} sx={{ width: '20px' }} props={{ viewBox, width, height, xmlns }} {...$$props}>
	<slot />
</Box>
