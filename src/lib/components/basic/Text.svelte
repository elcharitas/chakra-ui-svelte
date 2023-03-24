<script lang="ts">
	import Box from './Box.svelte';
	import type { TextProps } from './Text.svelte';

	type $$Props = TextProps;
</script>

<Box as="span" {...$$props}>
	<slot />
</Box>
