<script>
	import Stack from './Stack.svelte';
	export let spacing = 2;
</script>

<Stack {spacing} orientation="horizontal" {...$$restProps}>
	<slot />
</Stack>
