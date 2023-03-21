<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Box from '$lib/components/basic/Box.svelte';

	type $$Props = ChakraComponentProps & {
		/**
		 * The styled variant of the button.
		 *
		 * @default solid
		 */
		variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled';
	};
	const events = forwardEvents();
</script>

<Box as="button" apply="Button" {events} {...$$props}>
	<slot />
</Box>
