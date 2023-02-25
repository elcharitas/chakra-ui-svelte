<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';

	const events = forwardEvents();
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
