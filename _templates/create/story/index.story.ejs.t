---
to: src/lib/components/<%= name %>.story.svelte
---
<script lang="ts">
import <%= name.split('/').reverse()[0] %> from './<%= name.split('/').reverse()[0] %>.svelte';
import { logEvent } from 'histoire/client';

export let Hst;
let content = 'Lorem Ipsum';
</script>

<Hst.Story>
  <Hst.Variant>
    <<%= name.split('/').reverse()[0] %>>
      {content}
    </<%= name.split('/').reverse()[0] %>>
  </Hst.Variant>
</Hst.Story>