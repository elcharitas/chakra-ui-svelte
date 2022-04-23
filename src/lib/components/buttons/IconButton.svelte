<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';
	import Button from './Button.svelte';
	import Icon from '$lib/components/basic/Icon.svelte';

	export let icon;
	const events = eventsForward(current_component);
</script>

<Button {events} {...$$props}>
	<Icon as={icon} />
</Button>
