<script lang="ts">
	import { onMount } from 'svelte';
	import type { Theme } from '$lib/theme';
	import GlobalStyles from './GlobalStyles.svelte';

	/**
	 * The theme object
	 */
	// eslint-disable-next-line unicorn/no-useless-undefined
	export let theme: Theme | undefined = undefined;
	export let styles = {};

	let isComponentMounted = false;

	onMount(() => {
		isComponentMounted = true;
	});
</script>

<GlobalStyles {styles} {theme} />

<div style={isComponentMounted ? undefined : 'display: none'}><slot /></div>
