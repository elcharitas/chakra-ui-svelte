<script>
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Box from './Box.svelte';

	const events = eventsForward(current_component);
	export let as = 'svg';
	export let viewBox = '0 0 24 24';
	export let fill = 'none';
	export let stroke = 'currentColor';
	export let strokeWidth = '2';
	export let strokeLinecap = 'round';
	export let strokeLinejoin = 'round';

	export let sx = {
		display: 'inline-block',
		lineHeight: '1em',
		flexShrink: 0,
		color: 'red'
	};
</script>

{#if typeof as === 'string'}
	<Box
		{as}
		{events}
		props={{
			viewBox,
			ariaHidden: true,
			fill,
			stroke,
			strokeWidth,
			strokeLinecap,
			strokeLinejoin,
			width: '0.5em',
			height: '0.5em'
		}}
		{...$$props}
	>
		<slot />
	</Box>
{:else if typeof as !== 'string'}
	<Box {as} {events} {sx} fill="red" {...$$props} />
{/if}
