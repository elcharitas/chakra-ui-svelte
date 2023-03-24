<script>
	import { Box, Flex, Stack, ButtonGroup, Logo, Link } from '$lib/components';
	import { colorMode } from '$lib/stores';

	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';

	import { bg } from '../stores';
	import ActionButton from '../../routes/components/ActionButton.svelte';
</script>

<Box position="fixed" w="100vw">
	<Box
		as="nav"
		h="16"
		bg={$bg}
		shadow="md"
		display="flex"
		alignItems="center"
		justifyContent="space-around"
	>
		<Stack spacing={6}>
			<Link href="/">
				<Logo />
			</Link>
			<Link href="https://github.com/elcharitas/chakra-ui-svelte">
				<img
					alt="GitHub Repo stars"
					src="https://img.shields.io/github/stars/elcharitas/chakra-ui-svelte?style=social"
					style="height: 1.2rem;"
				/>
			</Link>
		</Stack>

		<Flex justify="center" justifyContent="center" display={{ base: 'none', md: 'flex' }} />

		<Flex justify="right" justifyContent="end">
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
</Box>
