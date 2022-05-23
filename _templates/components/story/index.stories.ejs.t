---
to: src/lib/components/<%= component %>.stories.js
---
import <%= component.split('/').reverse()[0] %> from './<%= component %>.stories.svelte';

export default {
  component: <%= component.split('/').reverse()[0] %>,
  title: <%= component.split('/').reverse()[0] %>,
  argTypes: {
      // lots of options here
  },
};