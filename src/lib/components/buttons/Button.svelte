<script>
	import Box from '$lib/components/Box.svelte';
</script>

<Box as="button" apply="Button" variant="solid" {...$$props}>
	<slot />
</Box>
