---
to: src/lib/components/<%= name %>.stories.js
---
import <%= name.split('/').reverse()[0] %> from '$lib/components/<%= name %>.svelte';

export default {
	title: 'Components/<%= name.split('/').reverse()[0] %>',
	component: <%= name.split('/').reverse()[0] %>,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	Component: <%= name.split('/').reverse()[0] %>,
	props: args
});

export const Simple<%= name.split('/').reverse()[0] %> = Template.bind({});
