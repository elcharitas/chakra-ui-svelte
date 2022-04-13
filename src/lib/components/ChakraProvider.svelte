<script>
	import { toCSSVar } from '@chakra-ui/styled-system';
	import { theme as baseTheme, themeStore, injectGlobal } from '$lib/index.js';

	export let theme = baseTheme;

	themeStore.set(theme);

	injectGlobal({
		'html, body': {
			margin: 0,
			padding: 0
		},
		':host, :root, [data-theme]': toCSSVar(theme).__cssVars
	});
</script>

<slot />
