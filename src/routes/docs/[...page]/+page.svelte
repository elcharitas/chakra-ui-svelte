<script>
	import { page } from '$app/stores';
</script>

{#await import(`../pages/${$page.params.page}.md`) then { default: component }}
	<svelte:component this={component} />
{/await}
