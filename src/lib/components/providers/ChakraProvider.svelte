<script lang="ts">
	import { onMount } from 'svelte';
	import { toCSSVar } from '@chakra-ui/styled-system';
	import { theme as baseTheme, themeStore, injectGlobal } from '$lib';

	export let theme = baseTheme;
	export let isMounted = false;

	themeStore.set({ ...baseTheme, ...theme });

	injectGlobal({
		'html, body': {
			margin: 0,
			padding: 0
		},
		':host, :root, [data-theme]': toCSSVar($themeStore).__cssVars
	});

	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<slot />
{/if}
