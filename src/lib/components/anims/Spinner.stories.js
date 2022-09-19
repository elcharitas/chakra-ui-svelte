import Spinner from './Spinner.svelte';

export default {
	title: 'Component/Spinner',
	component: Spinner,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	Component: Spinner,
	props: args
});

export const BasicSpinner = Template.bind({});
