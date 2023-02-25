<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';

	const events = forwardEvents(current_component);
</script>

<Box as="input" apply="Input" {events} {...$$props} noSlot />
