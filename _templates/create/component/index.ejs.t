---
to: src/lib/components/<%= name %>.svelte
---
<script lang="ts">
    import { onMount, onDestroy } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';
	import Box from '$lib/components/basic/Box.svelte';

	const events = forwardEvents();

    const props = {

    }

	onMount(() => {
        // mount logic goes here
    });

    onDestroy(() => {
        // destroy logic goes here
    });
</script>

<Box
    apply="<%= name.split('/').reverse()[0] %>"
    {props}
    {events}
    {...$$props}>

</Box>