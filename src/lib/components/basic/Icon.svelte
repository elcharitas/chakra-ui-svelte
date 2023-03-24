<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Box from './Box.svelte';
	import type { IconProps } from './Icon.svelte';

	type $$Props = IconProps;
	const events = forwardEvents();
	export let as: $$Props['as'] = 'svg';
</script>

<Box {as} {events} apply="Icon" inlineSize="sm" {...$$restProps}>
	<slot />
</Box>
