<script lang="ts">
	import { onMount } from 'svelte';
	import { toCSSVar } from '@chakra-ui/styled-system';
	import { theme as baseTheme, colorMode, themeStore, injectGlobal } from '$lib/index.js';

	export let theme = baseTheme;
	export let isMounted = false;

	themeStore.set(theme);

	injectGlobal({
		'html, body': {
			margin: 0,
			padding: 0
		},
		':host, :root, [data-theme]': toCSSVar(theme).__cssVars
	});

	onMount(() => {
		const mode = localStorage.getItem('chakra-ui-color-mode') as any;
		if (mode in ['light', 'dark']) {
			colorMode.set(mode);
		}
		isMounted = true;
	});
</script>

{#if isMounted}
	<slot />
{/if}
