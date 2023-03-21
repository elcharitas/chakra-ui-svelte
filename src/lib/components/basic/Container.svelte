<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Box from './Box.svelte';

	type $$Props = ChakraComponentProps;
	const events = forwardEvents();
</script>

<Box as="section" {events} mx="auto" {...$$props}>
	<slot />
</Box>
