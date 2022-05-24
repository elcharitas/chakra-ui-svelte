---
to: src/lib/components/<%= name %>.stories.svelte
---
<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import <%= name.split('/').reverse()[0] %> from '$lib/components/<%= name %>.svelte';
</script>

<Meta
  title="<%= name %>"
  component={<%= name.split('/').reverse()[0] %>}
  argTypes={{
    label: { control: "text" },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <<%= name.split('/').reverse()[0] %> {...args} on:click={args.onClick} />
</Template>

<Story
  name="Primary"
  args={{}}
/>