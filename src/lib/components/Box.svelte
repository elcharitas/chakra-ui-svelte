<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { styled, eventsForward } from '$lib/core/index.js';
	import type { SvelteComponent } from 'svelte';

	export let events = eventsForward(current_component);
	export let as: typeof SvelteComponent | string = 'div';
	export const apply: string = 'Box';
</script>

{#if typeof as === 'string'}
	<svelte:element this={as} use:styled={$$props} use:events>
		<slot />
	</svelte:element>
{/if}

{#if typeof as !== 'string'}
	<svelte:component this={as}>
		<slot />
	</svelte:component>
{/if}
