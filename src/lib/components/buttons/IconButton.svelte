<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { forwardEvents } from '$lib/core';
	import Button from './Button.svelte';
	import Icon from '$lib/components/basic/Icon.svelte';

	export let icon: string;
	export let wrap = 'div';
	const events = forwardEvents(current_component);
</script>

<Button {events} {...$$props}>
	<Icon as={icon} {wrap} />
</Button>
