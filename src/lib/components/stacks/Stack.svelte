<script lang="ts">
	import Flex from './Flex.svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';

	const events = eventsForward(current_component);

	export const spacing: string | number = 2;
	export const orientation: 'horizontal' | 'vertical' = null;
</script>

<Flex gap={spacing} direction={orientation === 'vertical' ? 'column' : 'row'} {events} {...$$props}>
	<slot />
</Flex>
