<script>
	import { Box, Flex, Stack, ButtonGroup, Input, Logo } from '$lib/components';
	import { colorMode } from '$lib/stores';

	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';

	import { bg, inputBg, color } from '../../stores';
	import ActionButton from '../components/ActionButton.svelte';
</script>

<Box
	as="nav"
	h="16"
	bg={$bg}
	shadow="md"
	display="flex"
	alignItems="center"
	justifyContent="space-around"
>
	<Stack direction="row" spacing={6}>
		<Logo />
	</Stack>

	<Flex justify="center" justifyContent="center" display={{ base: 'none', md: 'flex' }} />

	<Flex justify="right" justifyContent="end">
		<Input
			placeholder="Search the docs."
			sx={{
				bg: $inputBg,
				color: $color,
				width: '300px',
				fontWeight: 400,
				fontSize: 'sm',
				_hover: {
					bg: $inputBg
				},
				_placeholder: {
					color: 'gray.400'
				}
			}}
			mr="8"
			display={{ base: 'none', md: 'inline' }}
		/>
		<ButtonGroup alignItems="center" justifyContent="space-between">
			<ActionButton
				label="Star the Github Repo"
				icon={FaGithub}
				href="https://github.com/elcharitas/chakra-ui-svelte"
				display={{ base: 'none', md: 'inline' }}
			/>
			<ActionButton
				label="Twitter"
				icon={FaTwitter}
				href="https://twitter.com/chakraui_svelte"
				display={{ base: 'none', md: 'inline' }}
			/>
			{#if $colorMode === 'dark'}
				<ActionButton
					icon={FaSun}
					label="Switch to light Mode"
					on:click={() => colorMode.set('light')}
				/>
			{:else}
				<ActionButton
					icon={FaMoon}
					label="Switch to dark Mode"
					on:click={() => colorMode.set('dark')}
				/>
			{/if}
		</ButtonGroup>
	</Flex>
</Box>
