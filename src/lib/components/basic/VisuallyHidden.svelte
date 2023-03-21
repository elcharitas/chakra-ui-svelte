<script lang="ts">
	import type { ChakraComponentProps } from '$lib/types';
	type $$Props = ChakraComponentProps;

	import Text from './Text.svelte';
	const visuallyHiddenStyle = {
		border: '0px',
		clip: 'rect(0px, 0px, 0px, 0px)',
		height: '0px',
		width: '0px',
		margin: '-1px',
		padding: '0px',
		overflow: 'hidden'
	};
</script>

<Text sx={visuallyHiddenStyle} {...$$props}>
	<slot />
</Text>
