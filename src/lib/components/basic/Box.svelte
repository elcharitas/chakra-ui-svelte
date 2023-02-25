<script lang="ts">
	import { forwardEvents, createStyle, chakra, attributes } from '$lib/core';

	export let events = forwardEvents();
	export let as: any = 'div';
	export const apply: string = 'Box';
	export let wrap: boolean | string = false;
	export let props = {};
	export let sx = {};
	export let noSlot = false;

	const styles = createStyle({ sx, ...props });
</script>

{#if typeof as === 'string'}
	{#if noSlot}
		<svelte:element this={as} use:chakra={$$props} use:attributes={$$props} use:events />
	{:else}
		<svelte:element this={as} use:chakra={$$props} use:attributes={$$props} use:events>
			<slot />
		</svelte:element>
	{/if}
{:else if typeof as !== 'string'}
	{#if wrap}
		<svelte:element
			this={wrap !== true ? wrap : 'div'}
			use:chakra={$$props}
			use:attributes={$$props}
			use:events
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
