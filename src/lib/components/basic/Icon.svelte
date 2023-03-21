<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Box from './Box.svelte';

	type $$Props = ChakraComponentProps & {
		viewBox?: string;
		xmlns?: string;
		fill?: string;
		stroke?: string;
		strokeWidth?: string;
		strokeLinecap?: string;
		strokeLinejoin?: string;
		strokeDasharray?: string;
		strokeDashoffset?: string;
		cx?: string;
		cy?: string;
		r?: string;
	};
	const events = forwardEvents();
	export let as: $$Props['as'] = 'svg';
</script>

<Box {as} {events} apply="Icon" inlineSize="sm" {...$$restProps}>
	<slot />
</Box>
