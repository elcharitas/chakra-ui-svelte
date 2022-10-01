<script>
	import { Button, Icon, Link, VisuallyHidden } from '$lib/components';

	export let icon, label, href, target, rel;
	const SocialIcon = icon || 'span';
</script>

<Link {href} {target} {rel}>
	<Button>
		<VisuallyHidden>{label}</VisuallyHidden>
		<Icon as={SocialIcon} width="10px" />
		<slot />
	</Button>
</Link>
