<script lang="ts">
	import { onMount } from 'svelte';
	import type { theme as baseTheme } from '$lib/theme';
	import GlobalStyles from './GlobalStyles.svelte';

	export let theme: typeof baseTheme;
	export let styles = {};

	let isComponentMounted = false;

	onMount(() => {
		isComponentMounted = true;
	});
</script>

<GlobalStyles {styles} {theme} />

<div style={isComponentMounted ? undefined : 'display: none'}><slot /></div>
