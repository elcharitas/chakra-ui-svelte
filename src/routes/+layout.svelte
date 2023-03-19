<script lang="ts">
	import { ThemeProvider, Box, Container } from '$lib/components';
	import Navbar from '$docs/layout/Navbar.svelte';
	import { bg, color } from '$docs/stores';
	import 'highlightjs/styles/atom-one-dark.css';
</script>

<ThemeProvider>
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
</ThemeProvider>
