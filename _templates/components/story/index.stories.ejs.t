---
to: src/lib/components/<%= name %>.stories.js
---
import <%= name.split('/').reverse()[0] %> from '$lib/components/<%= name %>.svelte';

export default {
  component: <%= name.split('/').reverse()[0] %>,
  title: <%= name.split('/').reverse()[0] %>,
  argTypes: {
      // lots of options here
  },
};