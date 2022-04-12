<script>
	import Stack from './Stack.svelte';
	export let spacing = 2;
</script>

<Stack {spacing}>
	<slot />
</Stack>
