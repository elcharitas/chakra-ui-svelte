<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Spinner from '$lib/components/anims/Spinner.svelte';
</script>

<Meta
	title="anims/Spinner"
	component={Spinner}
	argTypes={{
		label: { control: 'text' },
		primary: { control: 'boolean' },
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] }
		},
		onClick: { action: 'onClick' }
	}}
/>

<Template let:args>
	<Spinner {...args} on:click={args.onClick} />
</Template>

<Story name="Primary" args={{}} />
