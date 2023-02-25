<script>
	import { Box, Text, Button, Link, Stack } from '$lib/components';
</script>

<Box as="section" pt={{ base: '6rem', md: '10rem' }} px={{ base: '2rem', sm: '5rem' }} mb={20}>
	<Box textAlign="center">
		<Text
			maxW="680px"
			mx="auto"
			fontSize={{ base: '2rem', sm: '3rem', lg: '4rem' }}
			fontFamily="heading"
			letterSpacing="tight"
			fontWeight="bold"
			mb="16px"
			lineHeight="1.2"
		>
			Build
			<Box as="span" bgGradient="linear(to-r, green.200, green.600)" bgClip="text">
				Accessible Svelte
			</Box> Apps
		</Text>

		<Text as="p" maxW="560px" mx="auto" opacity={0.7} fontSize={{ base: 'md', lg: 'xl' }} mt="6">
			Chakra UI is a simple, modular and accessible component library that gives you the building
			blocks you need to build your Svelte applications.
		</Text>
		<Stack mt="8" spacing="4" justifyContent="center" direction={{ base: 'column', sm: 'row' }}>
			<Link href="/docs/installation">
				<Button h="4rem" px="40px" fontSize="1.2rem" colorScheme="green" size="lg" cursor="pointer">
					Get Started
				</Button>
			</Link>
			<Link href={'https://github.com/elcharitas/chakra-ui-svelte'} target="_blank">
				<Button
					h="4rem"
					px="60px"
					fontSize="1.2rem"
					size="lg"
					colorScheme="gray"
					cursor="pointer"
					w={['full', , 'auto']}
				>
					Github
				</Button>
			</Link>
		</Stack>
		<Stack mt="8" spacing="4" justifyContent="center" direction="row">
			<Text>Looking for other implementations?</Text>
			<Link href="https://chakra-ui.com" opacity={0.7} fontSize="sm">ReactJs</Link>
			<Text>||</Text>
			<Link href="https://vue.chakra-ui.com" opacity={0.7} fontSize="sm">VueJs</Link>
		</Stack>
	</Box>
</Box>
