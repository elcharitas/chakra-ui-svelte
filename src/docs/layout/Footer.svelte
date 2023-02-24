<script>
	import { Box, Stack, Text, Link } from '$lib/components';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaEmail from 'svelte-icons/fa/FaEnvelope.svelte';

	import { bg, color } from '../../stores';
	import ActionButton from '../components/ActionButton.svelte';
</script>

<Box bg={$bg} color={$color}>
	<Stack
		py={4}
		spacing={4}
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		fontSize="sm"
	>
		<Text>
			Proudly developed by
			<Link href="https://elcharitas.dev" target="_blank">Jonathan Irhodia</Link>
		</Text>
		<Stack>
			<ActionButton label="Follow on Github" icon={FaGithub} href="https://github.com" />
			<ActionButton label="Follow on Twitter" icon={FaTwitter} />
			<ActionButton label="Connect on Linkedin" icon={FaLinkedin} />
			<ActionButton
				label="Send me an Email"
				icon={FaEmail}
				href="mailto:jonathanirhodia@gmail.com"
			/>
		</Stack>
	</Stack>
</Box>
