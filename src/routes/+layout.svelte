<script lang="ts">
	import { ChakraProvider } from '$lib/components';
	import Footer from '../layout/Footer.svelte';
</script>

<ChakraProvider>
	<slot />
	<Footer />
</ChakraProvider>
