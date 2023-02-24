<script>
	import { current_component } from 'svelte/internal';
	import { Button, Icon, Link, VisuallyHidden } from '$lib/components';
	import { eventsForward } from '$lib/core';

	import { hoverBg, color } from '../../stores';

	export let icon = '';
	export let label = '';
	export let href = '';
	export let target = '_blank';
	export let rel = 'button';
	const SocialIcon = icon || 'span';
	const events = eventsForward(current_component);
</script>

<Link {href} {target} {rel}>
	<Button
		sx={{
			bg: 'transparent',
			'&:hover': {
				bg: $hoverBg
			}
		}}
		size="xs"
		display="flex"
		justifyContent="center"
		alignItems="center"
		title={label}
		{events}
	>
		<VisuallyHidden>{label}</VisuallyHidden>
		<Icon as={SocialIcon} wrap="div" w="4" h="4" color={$color} />
		<slot />
	</Button>
</Link>
