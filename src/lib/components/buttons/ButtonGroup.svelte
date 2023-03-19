<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Stack from '../stacks/Stack.svelte';

	const events = forwardEvents();
</script>

<Stack {events} {...$$props}>
	<slot />
</Stack>
