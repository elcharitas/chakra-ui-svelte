<script lang="ts">
	import type { ChakraComponentProps } from '$lib/types';
	import Stack from './Stack.svelte';

    
	export let spacing = 2;
</script>

<Stack {spacing} orientation="vertical" {...$$restProps}>
	<slot />
</Stack>
