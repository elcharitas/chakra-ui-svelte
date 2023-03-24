<script>
	import { Button, Icon, VisuallyHidden } from '$lib/components';
	import { forwardEvents } from '$lib/core';

	import { hoverBg, color } from '../stores';

	export let icon = '';
	export let label = '';
	export let href = '';
	export let target = '_blank';
	export let rel = 'button';
	const SocialIcon = icon || 'span';
	const events = forwardEvents();
</script>

<Button
	as={href ? 'a' : 'button'}
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
	{href}
	{target}
	{rel}
	{events}
>
	<VisuallyHidden>{label}</VisuallyHidden>
	<Icon as={SocialIcon} wrap="div" w="4" h="4" color={$color} />
	<slot />
</Button>
