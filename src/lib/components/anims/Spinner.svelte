<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Box from '$lib/components/basic/Box.svelte';

	type $$Props = ChakraComponentProps & {
		size?: $$Props['width'];
	};
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
