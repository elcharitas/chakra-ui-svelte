<script>
	import Box from './Box.svelte';
</script>

<Box as="span" {...$$props}>
	<slot />
</Box>
