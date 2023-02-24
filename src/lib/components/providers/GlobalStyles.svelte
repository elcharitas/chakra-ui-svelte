<script lang="ts">
	import { toCSSVar } from '@chakra-ui/styled-system';
	import { themeStore } from '$lib/theme';
	import { injectGlobal } from '$lib/core';

	export let styles = {};

	injectGlobal({
		'html, body': {
			margin: 0,
			padding: 0
		},
		':host, :root, [data-theme]': toCSSVar($themeStore).__cssVars,
		...styles
	});
</script>
