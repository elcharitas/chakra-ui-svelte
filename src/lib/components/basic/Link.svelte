<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from './Box.svelte';
	import type { LinkProps } from './Link.svelte';

	type $$Props = LinkProps;
	const events = forwardEvents();
</script>

<Box as="a" apply="Link" {events} {...$$restProps}>
	<slot />
</Box>
