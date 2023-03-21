<script lang="ts">
	import type { ChakraComponentProps } from '$lib/types';

	type $$Props = ChakraComponentProps;
	import Box from './Box.svelte';
</script>

<Box as="span" {...$$props}>
	<slot />
</Box>
