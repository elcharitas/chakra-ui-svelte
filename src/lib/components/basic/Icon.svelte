<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';
	import Box from './Box.svelte';

	const events = eventsForward(current_component);
	export let as: SvelteComponent | string = 'svg';
	export let viewBox = '0 0 24 24';
	export let fill = 'none';
	export let stroke = 'currentColor';

	const styles = {
		w: '1em',
		h: '1em',
		display: 'inline-block',
		lineHeight: '1em',
		flexShrink: 0,
		color: 'currentColor'
	};
</script>

{#if typeof as === 'string'}
	<Box {as} props={{ viewBox, ariaHidden: true, fill, stroke }} {events} {...styles} {...$$props}>
		<slot />
	</Box>
{:else if typeof as !== 'string'}
	<Box {as} {events} {...styles} {...$$props} />
{/if}
