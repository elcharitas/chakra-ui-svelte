<script>
	import { afterUpdate } from 'svelte';
	import { current_component } from 'svelte/internal';
	import { eventsForward } from '$lib/core';
	import Box from '../basic/Box.svelte';
	import Button from './Button.svelte';

	export let isRippling = false;

	const events = eventsForward(current_component);

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
</script>

<Button
	overflow="hidden"
	position="relative"
	on:click={(e) => {
		const rect = e.target.getBoundingClientRect();
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
	}}
	{events}
	{...$$props}
>
	{#if isRippling}
		<Box
			as="span"
			width="20px"
			height="20px"
			position="absolute"
			background="#63a4ff"
			display="block"
			border-radius="9999px"
			opacity="1"
			animation="0.9s ease 1 forwards ripple-effect"
			style={{
				left: x,
				top: y
			}}>&nbsp;</Box
		>
	{/if}
	<Box as="span" position="relative" z-index="2">
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
