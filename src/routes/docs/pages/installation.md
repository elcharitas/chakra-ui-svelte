---
title: Installation
---

# Installation

To use Chakra UI in your project, run one of the following commands in your terminal:

```sh
$ npm i chakra-ui-svelte @emotion/css # using npm
$ yarn add chakra-ui-svelte @emotion/css # using yarn?
$ pnpm i chakra-ui-svelte @emotion/css # using pnpm? (preferred)
```

After installing Chakra UI, you need to set up the `ChakraProvider` at the root of your application.
This can be either in your `+layout.svelte` or `App.svelte` depending on the framework you use.

```html
<script>
	import { ChakraProvider } from 'chakra-ui-svelte';
</script>

<ChakraProvider>
	<App />
</ChakraProvider>
```

## GlobalStyles

Alternately, if you do not prefer to wrap all your app with the `ChakraProvider`, you can define a `GlobalStyles`.

```html
<script>
	import { GlobalStyles } from 'chakra-ui-svelte';
</script>

<GlobalStyles />
<App />
```
