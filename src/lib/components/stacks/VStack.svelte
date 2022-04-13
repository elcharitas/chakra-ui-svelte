<script>
	import Stack from './Stack.svelte';
	export let spacing = 2;
</script>

<Stack {spacing} orientation="vertical">
	<slot />
</Stack>
