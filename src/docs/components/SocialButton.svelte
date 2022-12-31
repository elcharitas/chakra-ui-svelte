<script>
	import { Button, Icon, Link, VisuallyHidden } from '$lib/components';

	export let icon, label, href, target, rel;
	const SocialIcon = icon || 'span';
</script>

<Link {href} {target} {rel}>
	<Button>
		<VisuallyHidden>{label}</VisuallyHidden>
		<Icon as={SocialIcon} wrap="div" />
		<slot />
	</Button>
</Link>
