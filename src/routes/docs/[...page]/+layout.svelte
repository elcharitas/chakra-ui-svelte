<script>
	import Footer from '../../layout/Footer.svelte';
	import { color, inputBg } from '../../stores';
	import { Box, Input, Flex } from '$lib/components';
</script>

<Flex justify="center" alignItems="top" justifyContent="space-evenly" mt={4}>
	<Box w="250px" display={{ base: 'none', md: 'flex' }} p={8}>
		<Box as="ul">
			<Box as="li">Navigation</Box>
		</Box>
	</Box>
	<Box p={8} w={{ base: 'full', md: '50%' }}>
		<slot />
		<Footer />
	</Box>
	<Box p={8} w={{ base: 'full', md: '250px' }}>
		<Input
			placeholder="Search the docs."
			sx={{
				bg: $inputBg,
				color: $color,
				width: '100%',
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
	</Box>
</Flex>
