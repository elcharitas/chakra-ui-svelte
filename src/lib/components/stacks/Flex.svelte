<script lang="ts">
	import type { ChakraComponentProps } from '$lib/types';
	import Box from '$lib/components/basic/Box.svelte';
	import { forwardEvents } from '$lib/core';

	type $$Props = ChakraComponentProps & {
		direction?: $$Props['flexDirection'];
	};

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
