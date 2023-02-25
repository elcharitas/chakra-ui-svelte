<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Button from './Button.svelte';
	import Icon from '$lib/components/basic/Icon.svelte';

	export let icon: string;
	export let wrap = 'div';
	const events = forwardEvents();
</script>

<Button {events} {...$$props}>
	<Icon as={icon} {wrap} />
</Button>
