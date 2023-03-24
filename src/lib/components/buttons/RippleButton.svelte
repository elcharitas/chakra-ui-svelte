<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { forwardEvents } from '$lib/core';
	import Box from '../basic/Box.svelte';
	import Button from './Button.svelte';
	import type { RippleButtonProps } from './RippleButton.svelte';

	type $$Props = RippleButtonProps;

	export let isRippling = false;

	const events = forwardEvents();

	let x = -1,
		y = -1;

	afterUpdate(() => {
		if (x !== -1 && y !== -1) {
			isRippling = true;
			setTimeout(() => (isRippling = false), 300);
		} else isRippling = false;
	});

	afterUpdate(() => {
		if (!isRippling) {
			x = -1;
			y = -1;
		}
	});

	const onClick = (e: CustomEvent<MouseEvent>) => {
		const target = e.detail.target as HTMLElement;
		const rect = target.getBoundingClientRect();
		x = e.detail.clientX - rect.left;
		y = e.detail.clientY - rect.top;
	};
</script>

<Button overflow="hidden" position="relative" on:click={onClick} {events} {...$$restProps}>
	{#if isRippling}
		<Box
			as="span"
			width="20px"
			height="20px"
			position="absolute"
			background="#63a4ff"
			display="block"
			borderRadius="9999px"
			opacity="1"
			animation="0.9s ease 1 forwards ripple-effect"
			sx={{
				left: x,
				top: y
			}}
		>
			&nbsp;
		</Box>
	{/if}
	<Box as="span" position="relative" zIndex="2">
		<slot />
	</Box>
</Button>

<style>
	@keyframes ripple-effect {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(10);
			opacity: 0.375;
		}
		100% {
			transform: scale(35);
			opacity: 0;
		}
	}
</style>
