import { writable, get } from 'svelte/store';

export type StoreCallback<T> = () => T;

/**
 * Creates a custom store for use by Chakra UI Svelte
 *
 * @param initialValue - The initial value of the store
 * @param subscription - A function that will be called when the store is updated
 * @returns
 */
export function createStore<T>(
	initialValue: StoreCallback<T>,
	subscription: (value: T) => void = () => {
		// do nothing
	}
) {
	const initial = initialValue();
	const store = writable(initial);
	store.subscribe(subscription);

	return {
		initial,
		get: get.bind({}, store) as StoreCallback<T>,
		...store
	};
}
