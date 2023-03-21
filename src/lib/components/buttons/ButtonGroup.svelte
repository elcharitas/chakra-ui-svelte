<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Stack from '../stacks/Stack.svelte';

	type $$Props = ChakraComponentProps & {
		/**
		 * The space between each button
		 */
		spacing?: $$Props['gap'];
	};
	const events = forwardEvents();
</script>

<Stack {events} {...$$props}>
	<slot />
</Stack>
