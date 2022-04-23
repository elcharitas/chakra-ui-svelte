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
	initialValue: T | StoreCallback<T>,
	subscription: (value: T) => void = () => null
) {
	if (initialValue instanceof Function) {
		initialValue = initialValue();
	}
	const { subscribe, set, update } = writable(initialValue);
	subscribe(subscription);

	return {
		subscribe,
		set,
		update,
		get() {
			return get(this);
		}
	};
}
