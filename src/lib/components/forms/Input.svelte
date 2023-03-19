<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';

	const events = forwardEvents();
</script>

<Box as="input" apply="Input" {events} {...$$props} noSlot />
