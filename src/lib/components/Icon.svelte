<script lang="ts">
	import Box from './Box.svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';
	import type { SvelteComponent } from 'svelte';

	const events = eventsForward(current_component);
	export let as: typeof SvelteComponent | string = 'svg';

	const styles = {
		w: '1em',
		h: '1em',
		display: 'inline-block',
		lineHeight: '1em',
		flexShrink: 0,
		color: 'currentColor'
	};

	const viewBox = '0 0 24 24';
</script>

{#if typeof as === 'string'}
	<Box {as} props={{ viewBox, ariaHidden: true }} {events} {...styles} {...$$props}>
		<slot />
	</Box>
{:else if typeof as !== 'string'}
	<Box {as} {events} {...styles} {...$$props} />
{/if}
