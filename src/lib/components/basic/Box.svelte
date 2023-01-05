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
    /**
     * Ideally, we should be able to use the `props` attribute to forward all props to the underlying element.
     * However, this would be really troublesome to maintain as we would have to manually add all props to the `props` attribute.
     * Instead, we use the `as` attribute to determine the underlying element and forward all props to it.
     * 
     * If the `as` attribute is a string, we use the `svelte:element` component to forward all props to the underlying element.
     * In future versions of Svelte, we can use the `use:props` directive to forward all props to the underlying element.
     * The `props` attribute may also become deprecated.
    */
	const attributes = {
		...(typeof as === 'string'
			? Object.keys(document.createElement(as).__proto__).reduce((acc, name) => {
					return { ...acc, [name]: $$props[name] };
			  }, {})
			: {}),
		...props
	};
</script>

{#if typeof as === 'string'}
	<svelte:element this={as} use:chakra={$$props} use:events {...attributes}>
		<slot />
	</svelte:element>
{:else if typeof as !== 'string'}
	{#if wrap}
		<div class={styles} use:events {...attributes}>
			<svelte:component this={as}>
				<slot />
			</svelte:component>
		</div>
	{:else}
		<svelte:component this={as} class={styles} {...attributes}>
			<slot />
		</svelte:component>
	{/if}
{/if}
