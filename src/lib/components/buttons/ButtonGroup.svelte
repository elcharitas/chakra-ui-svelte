<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Stack from '../stacks/Stack.svelte';
	import type { ButtonGroupProps } from './ButtonGroup.svelte';

	type $$Props = ButtonGroupProps;
	const events = forwardEvents();
</script>

<Stack {events} {...$$props}>
	<slot />
</Stack>
