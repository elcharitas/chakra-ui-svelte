<script lang="ts">
	import Text from './Text.svelte';
	import type { VisuallyHiddenProps } from './VisuallyHidden.svelte';
    
	type $$Props = VisuallyHiddenProps;

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
