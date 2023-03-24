<script lang="ts">
	type $$Props = LoaderProps;
	import Icon from '../basic/Icon.svelte';
	import type { LoaderProps } from './Loader.svelte';
	export let size: $$Props['size'] = 24;
</script>

<Icon
	width={size}
	height={size}
	animation="rotate 2s linear infinite"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	strokeWidth="2"
	strokeLinecap="round"
	strokeLinejoin="round"
>
	<Icon as="circle" animation="loader 1.5s ease-in-out infinite" cx="12" cy="12" r="10" />
</Icon>

<style>
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes loader {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
</style>
