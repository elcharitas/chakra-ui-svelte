---
to: src/lib/components/<%= name %>.svelte.d.ts
---
import type { ChakraComponentProps } from '$lib/types';
import type { SvelteComponentTyped } from 'svelte';

export type <%= name %>Props = ChakraComponentProps;
export default class <%= name %> extends SvelteComponentTyped<<%= name %>Props> {}
