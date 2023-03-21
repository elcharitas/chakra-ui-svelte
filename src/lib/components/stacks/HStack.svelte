<script lang="ts">
	import type { ChakraComponentProps } from '$lib/types';
	import Stack from './Stack.svelte';
	type $$Props = ChakraComponentProps & {
		spacing?: $$Props['gap'];
	};
	export let spacing: $$Props['gap'] = 2;
</script>

<Stack {spacing} orientation="horizontal" {...$$restProps}>
	<slot />
</Stack>
