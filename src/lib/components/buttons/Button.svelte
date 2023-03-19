<script>
	import { forwardEvents } from '$lib/core';

	import Box from '$lib/components/basic/Box.svelte';

	const events = forwardEvents();
</script>

<Box as="button" apply="Button" {events} variant="solid" {...$$props}>
	<slot />
</Box>
