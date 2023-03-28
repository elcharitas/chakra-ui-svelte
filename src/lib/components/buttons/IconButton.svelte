<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import Icon from '$lib/components/basic/Icon.svelte';
	import Button from './Button.svelte';
	import type { IconButtonProps } from './IconButton.svelte';

	type $$Props = IconButtonProps;
	export let icon: $$Props['as'];
	export let wrap: $$Props['wrap'] = 'div';
	const events = forwardEvents();
</script>

<Button {events} display="flex" justifyContent="center" alignItems="center" {...$$restProps}>
	<Icon as={icon} {wrap} />
	<slot />
</Button>
