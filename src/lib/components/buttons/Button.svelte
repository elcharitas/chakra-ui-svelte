<script>
    import Box from "$lib/components/Box.svelte";
</script>

<Box as="button" variant="solid" {...$$props}>
    <slot />
</Box>
