<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from './Box.svelte';
	import type { ContainerProps } from './Container.svelte';

	type $$Props = ContainerProps;
	const events = forwardEvents();
</script>

<Box as="section" {events} mx="auto" {...$$props}>
	<slot />
</Box>
