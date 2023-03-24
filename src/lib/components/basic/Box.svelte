<script lang="ts">
	import { forwardEvents, createStyle, chakra, attributes } from '$lib/core';
	import type { BoxProps } from './Box.svelte';

	type $$Props = BoxProps;

	export let events = forwardEvents();
	export let as: $$Props['as'] = 'div';
	export let wrap: $$Props['wrap'] = false;
	export let noSlot = false;
</script>

{#if typeof as === 'string'}
	{#if noSlot}
		<svelte:element this={as} use:chakra={$$restProps} use:attributes={$$restProps} use:events />
	{:else}
		<svelte:element this={as} use:chakra={$$restProps} use:attributes={$$restProps} use:events>
			<slot />
		</svelte:element>
	{/if}
{:else if typeof as !== 'string'}
	{#if wrap}
		<svelte:element
			this={wrap !== true ? wrap : 'div'}
			use:chakra={$$restProps}
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
            For now, we'll just pass the restProps to the component.
        -->
		<svelte:component this={as} class={createStyle($$restProps.sx)} {...$$restProps}>
			<slot />
		</svelte:component>
	{/if}
{/if}
