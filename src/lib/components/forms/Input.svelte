<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';

	const events = eventsForward(current_component);
</script>

<Box as="input" apply="Input" {events} {...$$props} noSlot />
