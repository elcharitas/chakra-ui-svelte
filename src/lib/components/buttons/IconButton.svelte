<script lang="ts">
	import { forwardEvents } from '$lib/core';
	import type { ChakraComponentProps } from '$lib/types';
	import Icon from '$lib/components/basic/Icon.svelte';
	import Button from './Button.svelte';

	type $$Props = ChakraComponentProps & {
		/**
		 * The icon to display in the button.
		 */
		icon: $$Props['as'];
	};
	export let icon: $$Props['as'];
	export let wrap: $$Props['wrap'] = 'div';
	const events = forwardEvents();
</script>

<Button {events} {...$$restProps}>
	<Icon as={icon} {wrap} />
</Button>
