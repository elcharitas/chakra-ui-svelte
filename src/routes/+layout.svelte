<script lang="ts">
	import { ThemeProvider, Box, Container } from '$lib/components';
	import Navbar from '$docs/layout/Navbar.svelte';
	import Footer from '$docs/layout/Footer.svelte';
	import { bg, color } from '../stores';
</script>

<ThemeProvider>
	<Box bg={$bg} color={$color} minH="100vh">
		<Navbar />
		<Container>
			<slot />
		</Container>
		<Footer />
	</Box>
</ThemeProvider>
