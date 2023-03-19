<script>
	import Footer from '$docs/layout/Footer.svelte';
	import { Box, Flex } from '$lib/components';
</script>

<Flex justify="center" justifyContent="space-evenly" mt={4}>
	<Box w="250px" display={{ base: 'none', md: 'flex' }} p={8}>
		<Box as="ul">
			<Box as="li">Navigation</Box>
		</Box>
	</Box>
	<Box p={8} w={{ base: 'full', md: '50%' }}>
		<slot />
		<Footer />
	</Box>
	<Box p={8} w={{ base: 'full', md: '250px' }}>MENU</Box>
</Flex>
