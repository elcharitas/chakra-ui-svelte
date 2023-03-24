---
to: src/lib/components/<%= name %>.svelte
---
<script lang="ts">
    import { onMount, onDestroy } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';
	import type { <%= name.split('/').reverse()[0] %>Props } from './<%= name.split('/').reverse()[0] %>.svelte';
	import Box from '$lib/components/basic/Box.svelte';

	type $$Props = <%= name.split('/').reverse()[0] %>Props;
	const events = forwardEvents();

    // underlying element props
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