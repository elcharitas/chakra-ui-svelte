<script lang="ts">
	import { ChakraProvider, Box, Container } from '$lib/components';
	import Navbar from './layout/Navbar.svelte';
	import { bg, color } from './stores';
	import 'highlight.js/styles/atom-one-dark.css';
</script>

<ChakraProvider>
	<Box
		bg={$bg}
		color={$color}
		minH="100vh"
		sx={{
			'& code': {
				p: 4,
				borderRadius: 4
			},
			'& p code': {
				p: 0,
				color: 'purple.300'
			}
		}}
	>
		<Navbar />
		<Container pt="50px">
			<slot />
		</Container>
	</Box>
</ChakraProvider>
