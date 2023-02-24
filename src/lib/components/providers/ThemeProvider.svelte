<script lang="ts">
	import { onMount } from 'svelte';
	import { theme as baseTheme, themeStore } from '$lib/theme';
	import GlobalStyles from './GlobalStyles.svelte';

	export let theme = baseTheme;
	export let styles = {};

	let isComponentMounted = false;
	themeStore.set({ ...baseTheme, ...theme });

	onMount(() => {
		isComponentMounted = true;
	});
</script>

<GlobalStyles {styles} />

<div style={!isComponentMounted ? 'display: none' : undefined}><slot /></div>
