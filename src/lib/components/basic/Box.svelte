<script lang="ts">
	import { forwardEvents, createStyle, chakra, attributes } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';

	type $$Props = ChakraComponentProps;

	export let events = forwardEvents();
	export const apply: string = 'Box';
	export let as: $$Props['as'] = 'div';
	export let wrap: $$Props['wrap'] = false;
	export let sx = {};
	export let noSlot = false;

	const styles = createStyle({ sx });
</script>

{#if typeof as === 'string'}
	{#if noSlot}
		<svelte:element this={as} use:chakra={$$props} use:attributes={$$restProps} use:events />
	{:else}
		<svelte:element this={as} use:chakra={$$props} use:attributes={$$restProps} use:events>
			<slot />
		</svelte:element>
	{/if}
{:else if typeof as !== 'string'}
	{#if wrap}
		<svelte:element
			this={wrap !== true ? wrap : 'div'}
			use:chakra={$$props}
			use:attributes={$$restProps}
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
		<svelte:component this={as} class={styles} {...$$restProps}>
			<slot />
		</svelte:component>
	{/if}
{/if}
