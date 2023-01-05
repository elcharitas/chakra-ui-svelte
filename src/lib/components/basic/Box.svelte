<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventsForward, createStyle, chakra } from '$lib/core';

	export let events = eventsForward(current_component);
	export let as: any = 'div';
	export const apply = 'Box';
	export let wrap: boolean | string = false;
	export let props = {};
	export let sx = {};

	const styles = createStyle({ sx, ...props });
</script>

{#if typeof as === 'string'}
	<svelte:element this={as} use:chakra={$$props} use:events {...props}>
		<slot />
	</svelte:element>
{:else if typeof as !== 'string'}
	{#if wrap}
		<div class={styles} use:events {...props}>
			<svelte:component this={as}>
				<slot />
			</svelte:component>
		</div>
	{:else}
		<svelte:component this={as} class={styles} {...props}>
			<slot />
		</svelte:component>
	{/if}
{/if}
