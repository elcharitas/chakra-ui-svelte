<script lang="ts">
	import Box from '$lib/components/basic/Box.svelte';
	import { forwardEvents } from '$lib/core';
	import type { FlexProps } from './Flex.svelte';

	type $$Props = FlexProps;
	const events = forwardEvents();
	export const direction = 'row';
</script>

<Box
	as="div"
	display="flex"
	flexDirection={direction}
	flexWrap="wrap"
	alignItems="center"
	{events}
	{...$$props}
>
	<slot />
</Box>
