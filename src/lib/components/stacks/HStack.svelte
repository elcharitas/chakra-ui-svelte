<script lang="ts">
	import type { StackProps } from './HStack.svelte';
	import Stack from './Stack.svelte';
	type $$Props = StackProps
	export let spacing: $$Props['gap'] = 2;
</script>

<Stack {spacing} orientation="horizontal" {...$$restProps}>
	<slot />
</Stack>
