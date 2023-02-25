<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventsForward, createStyle, chakra, forwardAttributes } from '$lib/core';

	export let events = eventsForward(current_component);
	export let as: any = 'div';
	export const apply: string = 'Box';
	export let wrap: boolean | string = false;
	export let props = {};
	export let sx = {};
	export let noSlot = false;

	const styles = createStyle({ sx, ...props });
	// this provides a fine grained control over the component's props
	const attributes = forwardAttributes(as, $$props);
</script>

{#if typeof as === 'string'}
	{#if noSlot}
		<svelte:element this={as} use:chakra={$$props} use:events use:attributes />
	{:else}
		<svelte:element this={as} use:chakra={$$props} use:events use:attributes>
			<slot />
		</svelte:element>
	{/if}
{:else if typeof as !== 'string'}
	{#if wrap}
		<svelte:element
			this={wrap !== true ? wrap : 'div'}
			use:chakra={$$props}
			use:events
			use:attributes
		>
			<svelte:component this={as}>
				<slot />
			</svelte:component>
		</svelte:element>
	{:else}
		<!--
            Components behave differently from elements.
            However, we'd like to add support for them.
            For now, we'll just pass the props to the component.
        -->
		<svelte:component this={as} class={styles} {...$$props}>
			<slot />
		</svelte:component>
	{/if}
{/if}
