<div align="center">
    <img src="./static/logo-light.svg" style="max-height: 120px" />
</div>

# Chakra UI `svelte` 👋

## Build Accessible Svelte Apps with Speed

[![npm version](https://badge.fury.io/js/chakra-ui-svelte.svg)](https://www.npmjs.com/package/chakra-ui-svelte)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](#)
[![iamelcharitas](https://img.shields.io/twitter/follow/iamelcharitas.svg?style=)](https://twitter.com/iamelcharitas)

Chakra UI provides a set of accessible, reusable, and composable Svelte components that make it super easy to create websites and apps.

## Features 🚀

- Ease of Styling: Chakra UI contains a set of layout components like Box and Stack that make it easy to style your components by passing props.
- Flexible & composable: Chakra UI components are built to be adaptable and extended.
- Accessible. Chakra UI components follow the WAI-ARIA guidelines specifications and have the right aria-\* attributes.
- Out the box support for Dark Mode 😍: Most components in Chakra UI are dark mode compatible.

## Installation

To use Chakra UI components, all you need to do is install the `chakra-ui-svelte` package and its peer dependencies:

```sh
$ yarn add chakra-ui-svelte @emotion/css

# or

$ npm i chakra-ui-svelte @emotion/css

# or

$ pnpm install chakra-ui-svelte @emotion/css
```

## Usage

To start using the components, please follow these steps:

- Wrap your application with the `ChakraProvider`

```html
// page.svelte
<script>
	import { ChakraProvider } from 'chakra-ui-svelte';
	import App from './App.svelte';
</script>

<ChakraProvider>
	<App />
</ChakraProvider>
```

- The provider is essential as it injects generated styles into your svelte app.

## Supported Components

The latest release has the following components

- ChakraProvider - Which should wrap all other components
- Box - The Basic component upon which every other component is built on
- Icon
- Logo
- Text
- VisuallyHidden
- Button
- IconButton
- RippleButton
- Flex
- Stack
- HStack
- VStack
- Spinner
- Loader

Complete Documentation would be available soon

## Contributing

Feel like contributing? That's awesome! There's a [contributing guide](./CONTRIBUTING.md) to help guide you.

## Author

👤 **elcharitas**

- Website: https://elcharitas.dev
- Twitter: [@iamelcharitas](https://twitter.com/iamelcharitas)
- Github: [@elcharitas](https://github.com/elcharitas)
- LinkedIn: [@elcharitas](https://linkedin.com/in/elcharitas)

## Show your support

Give a ⭐️ if this project helped you!
