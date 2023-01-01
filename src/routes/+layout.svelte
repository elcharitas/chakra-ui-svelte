<script lang="ts">
	import { ChakraProvider } from '$lib/components';
	import Navbar from '$docs/layout/Navbar.svelte';
	import Footer from '$docs/layout/Footer.svelte';
</script>

<ChakraProvider>
	<Navbar />
	<slot />
	<Footer />
</ChakraProvider>
