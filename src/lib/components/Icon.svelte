<script lang="ts">
	import Box from './Box.svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';
	import type { SvelteComponent } from 'svelte';

	const events = eventsForward(current_component);
	export let as: typeof SvelteComponent | string = 'svg';
</script>

<Box {as} {events} {...$$props}>
	<slot />
</Box>
