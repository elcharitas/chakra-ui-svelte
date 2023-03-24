---
to: src/lib/components/<%= name %>.svelte.d.ts
---
import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type <%= name.split('/').reverse()[0] %>Props = ChakraComponentProps;
export default class <%= name.split('/').reverse()[0] %> extends SvelteComponentTyped<<%= name.split('/').reverse()[0] %>Props> {}
