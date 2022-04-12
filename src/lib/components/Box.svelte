<script>
	import { current_component } from 'svelte/internal';
	import { styled, eventsForward } from '$lib/core/index.js';

	export let events = eventsForward(current_component);
	export let as = 'div';
	export const apply = 'Box';
</script>

<svelte:element this={as} use:styled={$$props} use:events>
	<slot />
</svelte:element>
