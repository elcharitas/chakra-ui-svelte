---
to: src/lib/components/<%= component %>.stories.svelte
---
<script lang="ts">
    import <%= component.split('/').reverse()[0] %> from './<%= component %>.stories.svelte';
</script>