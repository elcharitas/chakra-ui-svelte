---
to: src/lib/components/<%= component %>.svelte
---
<script lang="ts">
    import { onMount, onDestroy, current_component } from "svelte/internal";
	import { eventsForward } from '$lib/core/index.js';
	import Box from '$lib/components/basic/Box.svelte';

	const events = eventsForward(current_component);

	onMount(() => {
        // mount logic goes here
    });

    onDestroy(() => {
        // destroy logic goes here
    });
</script>

<Box>

</Box>