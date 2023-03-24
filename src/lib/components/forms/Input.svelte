<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';
	import type { InputProps } from './Input.svelte';

	type $$Props = InputProps;
	const events = forwardEvents();
</script>

<Box as="input" apply="Input" {events} {...$$props} noSlot />
