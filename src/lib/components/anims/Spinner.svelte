<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';
	import type { SpinnerProps } from './Spinner.svelte';

	type $$Props = SpinnerProps;
	const events = forwardEvents();
	export let color: $$Props['color'] = 'whiteAlpha.700';
</script>

<Box
	border="16px solid"
	borderColor={color}
	animation="spin 2s linear infinite"
	borderRadius="50%"
	{events}
	{...$$props}
/>
