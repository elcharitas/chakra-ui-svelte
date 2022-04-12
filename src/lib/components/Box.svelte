<script>
	import { styled } from '$lib/core/index.js';
	export let as = 'div';
</script>

<svelte:element this={as} use:styled={$$props}>
	<slot />
</svelte:element>
