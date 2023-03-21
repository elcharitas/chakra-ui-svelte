<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Box from './Box.svelte';

	type $$Props = ChakraComponentProps & {
		/**
		 * The URL the link points to.
		 *
		 * Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers.
		 */
		href?: string;
	};
	const events = forwardEvents();
</script>

<Box as="a" apply="Link" {events} {...$$restProps}>
	<slot />
</Box>
