<script>
	import { Box, Flex, Stack, Text, Button, IconButton, Logo } from '$lib/components';
	import { colorModeValue } from '$lib/stores';
</script>

<Box>
	<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
		<Logo />
		<Button fontSize={'sm'} fontWeight={400} bgColor="green.500">Sign In</Button>
		<Button fontSize={'sm'} fontWeight={400}>Sign In</Button>
	</Stack>
</Box>
