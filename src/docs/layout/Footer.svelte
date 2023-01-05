<script>
	import { Box, Stack, Text } from '$lib/components';
	import { colorModeValue } from '$lib/stores';

	import SocialButton from '../components/SocialButton.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';

	const bg = colorModeValue('gray.50', 'gray.900');
	const color = colorModeValue('gray.700', 'gray.200');
</script>

<Box bg={$bg} color={$color}>
	<Stack
		py={4}
		orientation="horizontal"
		spacing={4}
		justifyContent={{ base: 'center', md: 'space-between' }}
		alignItems={{ base: 'center', md: 'center' }}
	>
		<Text>© 2022 Chakra UI. All rights reserved</Text>
		<Stack
			orientation="horizontal"
			spacing={6}
			justifyContent={{ base: 'center', md: 'space-between' }}
			sx={{ fontSize: 'sm' }}
		>
			<SocialButton label="Twitter" icon={FaTwitter} href="#" />
			<SocialButton label="YouTube" icon={FaGithub} href="#" />
		</Stack>
	</Stack>
</Box>
