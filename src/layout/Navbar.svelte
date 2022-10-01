<script>
	import {
		Box,
		Flex,
		Text,
		IconButton,
		Button,
		Stack,
		Collapse,
		Icon,
		Link,
		Popover,
		PopoverTrigger,
		PopoverContent,
		useColorModeValue,
		useBreakpointValue,
		useDisclosure
	} from '@chakra-ui/react';
</script>

<Box>
	<Flex
		bg={useColorModeValue('white', 'gray.800')}
		color={useColorModeValue('gray.600', 'white')}
		minH={'60px'}
		py={{ base: 2 }}
		px={{ base: 4 }}
		borderBottom={1}
		borderStyle={'solid'}
		borderColor={useColorModeValue('gray.200', 'gray.900')}
		align={'center'}
	>
		<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
			<IconButton onClick={onToggle} variant={'ghost'} aria-label={'Toggle Navigation'} />
		</Flex>
		<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
			<Text
				textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
				fontFamily={'heading'}
				color={useColorModeValue('gray.800', 'white')}
			>
				Logo
			</Text>

			<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
				<DesktopNav />
			</Flex>
		</Flex>

		<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
			<Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>Sign In</Button>
			<Button
				display={{ base: 'none', md: 'inline-flex' }}
				fontSize={'sm'}
				fontWeight={600}
				color={'white'}
				bg={'pink.400'}
				href={'#'}
				_hover={{
					bg: 'pink.300'
				}}
			>
				Sign Up
			</Button>
		</Stack>
	</Flex>

	<Collapse in={isOpen} animateOpacity>
		<MobileNav />
	</Collapse>
</Box>
