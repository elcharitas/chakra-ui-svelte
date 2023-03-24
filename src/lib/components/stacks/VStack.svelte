<script lang="ts">
	import Stack from './Stack.svelte';
	import type { StackProps } from './VStack.svelte';

	type $$Props = StackProps;
	export let spacing: $$Props['spacing'] = 2;
</script>

<Stack {spacing} orientation="vertical" {...$$restProps}>
	<slot />
</Stack>
