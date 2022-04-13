<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core/index.js';
	import Button from './Button.svelte';

	export let icon;
	const events = eventsForward(current_component);
	const ButtonIcon = icon;
</script>

<Button {events} {...$$props}>
	<ButtonIcon />
</Button>
