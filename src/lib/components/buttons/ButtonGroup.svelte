<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Stack from '../stacks/Stack.svelte';

	const events = eventsForward(current_component);
</script>

<Stack {events} {...$$props}>
	<slot />
</Stack>
