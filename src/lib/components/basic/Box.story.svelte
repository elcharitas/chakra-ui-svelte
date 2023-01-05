<script lang="ts">
	import Box from './Box.svelte';
	import { logEvent } from 'histoire/client';

	export let Hst;
	let content = 'Lorem Ipsum...';
</script>

<Hst.Story group="components" id="basic/box">
	<Hst.Variant>
		<Box>
			{content}
		</Box>
	</Hst.Variant>
</Hst.Story>
