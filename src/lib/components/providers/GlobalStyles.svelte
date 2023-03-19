<script lang="ts">
	import { toCSSVar } from '@chakra-ui/styled-system';
	import { themeStore, type theme as baseTheme } from '$lib/theme';
	import { injectGlobal } from '$lib/core';
	import { onMount } from 'svelte';

	export let styles = {};
	export let theme: typeof baseTheme;

	injectGlobal({
		'html, body': {
			margin: 0,
			padding: 0
		},
		':host, :root, [data-theme]': toCSSVar($themeStore).__cssVars,
		...styles
	});

	onMount(() => {
		if (theme) themeStore.set(theme);
	});
</script>
