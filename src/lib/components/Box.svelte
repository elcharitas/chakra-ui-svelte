<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { current_component, onMount } from 'svelte/internal';
	import { eventsForward, styled, pick, omit, type Dict } from '$lib/index.js';

	export let events = eventsForward(current_component);
	export let as: typeof SvelteComponent | string = 'div';
	export const apply: string = 'Box';
	export let props = {};

	let bound: EventTarget | SvelteComponent;
	onMount(() => {
		if (bound) {
			events(bound as EventTarget);
		}
		const el = document.createElement(typeof as === 'string' ? as : 'div');
		const baseProps = pick($$props, Object.keys((el as unknown as Dict).__proto__));
		props = { ...omit(baseProps, ['toString']), ...props };
	});
</script>

{#if typeof as === 'string'}
	<svelte:element this={as} use:styled={$$props} {...props} use:events>
		<slot />
	</svelte:element>
{:else if typeof as !== 'string'}
	<svelte:component this={as} bind:this={bound} on:click>
		<slot />
	</svelte:component>
{/if}
