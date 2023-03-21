<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Box from '$lib/components/basic/Box.svelte';

	type $$Props = ChakraComponentProps;
	const events = forwardEvents();
</script>

<Box as="input" apply="Input" {events} {...$$props} noSlot />
