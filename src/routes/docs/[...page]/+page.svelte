<script>
	export let data;
</script>

{#await import(`../pages/${data.slug}.md`) then { default: component }}
	<svelte:component this={component} />
{/await}
