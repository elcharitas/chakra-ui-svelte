---
group: 'top'
icon: 'carbon:composer-edit'
title: Introduction
id: introduction
---

# Introduction

Chakra UI `svelte` is an open-source component library for building user interfaces with the Svelte framework.
It is based on the popular Chakra UI library, which is built with React.

## Features 🚀

- Ease of Styling: Chakra UI contains a set of layout components like Box and Stack that make it easy to style your components by passing props.
- Flexible & composable: Chakra UI components are built to be adaptable and extended.
- Accessible. Chakra UI components follow the WAI-ARIA guidelines specifications and have the right aria-\* attributes.
- Out the box support for Dark Mode 😍: Most components in Chakra UI are dark mode compatible.

## Installation

To use Chakra UI components, all you need to do is install the `chakra-ui-svelte` package and (optionally) its peer dependencies:

```sh
$ yarn add chakra-ui-svelte svelte-icons

# or

$ npm i chakra-ui-svelte svelte-icons

# or

$ pnpm install chakra-ui-svelte svelte-icons
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
