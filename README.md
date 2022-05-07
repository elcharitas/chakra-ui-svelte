# Welcome to chakra-ui-svelte 👋

> An implementation of Chakra Ui in Svelte

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](#)
[![Twitter: iamelcharitas](https://img.shields.io/twitter/follow/iamelcharitas.svg?style=social)](https://twitter.com/iamelcharitas)
[Homepage](https://github.com/elcharitas/chakra-ui-svelte)
[Demo](https://chakra-svelte.vercel.app)

## Install

```sh
pnpm install chakra-ui-svelte
```

```html
<script>
	import { Box, Button, ChakraProvider } from 'chakra-ui-svelte';
</script>

<ChakraProvider>
	<Box color="red">Chakra UI Svelte</Box>
	<button>Test Button</button>
</ChakraProvider>
```

The latest release has the following components

- ChakraProvider - Which should wrap all other components
- Box - The Basic component upon which every other component is built on
- Icon
- Logo
- Text
- VisuallyHidden
- Button
- IconButton - IconButton is still buggy and proper documentation is not yet available
- Flex
- Stack
- HStack
- VStack

Documentation would be available soon

## Author

👤 **elcharitas**

- Website: https://elcharitas.dev
- Twitter: [@iamelcharitas](https://twitter.com/iamelcharitas)
- Github: [@elcharitas](https://github.com/elcharitas)
- LinkedIn: [@elcharitas](https://linkedin.com/in/elcharitas)

## Show your support

Give a ⭐️ if this project helped you!
