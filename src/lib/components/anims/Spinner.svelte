<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';

	const events = eventsForward(current_component);
	export let color = 'grey';
	export let size = 'md';
</script>

<Box
	{size}
	br="50%"
	border="16px solid"
	borderColor={color}
	animation="spin 2s linear infinite"
	{events}
	{...$$props}
/>
