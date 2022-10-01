<script>
	import { current_component, onMount } from 'svelte/internal';
	import { eventsForward, chakra, colorMode, pick, omit } from '$lib';

	export let events = eventsForward(current_component);
	export let as = 'div';
	export let colormode = $colorMode;
	export const apply = 'Box';
	export let props = {};
	export let sx = {};

	let bound;
	onMount(() => {
		if (bound) {
			events(bound);
		}
		const el = document.createElement(typeof as === 'string' ? as : 'div');
		const baseProps = pick($$props, Object.keys(el.__proto__));
		props = {
			colormode,
			...omit(baseProps, ['toString']),
			...props,
			...sx
		};
	});
</script>

{#if typeof as === 'string'}
	<svelte:element this={as} use:chakra={$$props} use:events>
		<slot />
	</svelte:element>
{:else if typeof as !== 'string'}
	<svelte:component this={as} {colormode} bind:this={bound} on:click>
		<slot />
	</svelte:component>
{/if}
