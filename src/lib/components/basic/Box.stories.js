import Box from './Box.svelte';

export default {
	title: 'Components/Box',
	component: Box,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	Component: Box,
	props: args
});

export const SimpleBox = Template.bind({});
