<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';
	import type { ButtonProps } from './Button.svelte';

	type $$Props = ButtonProps;
	const events = forwardEvents();
</script>

<Box as="button" apply="Button" {events} {...$$props}>
	<slot />
</Box>
