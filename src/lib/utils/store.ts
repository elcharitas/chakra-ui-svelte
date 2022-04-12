import { writable } from 'svelte/store';

type StoreCallback<T> = () => T;

/**
 * Creates a custom store for use by Chakra UI Svelte
 *
 * @param key used to cache the value
 * @param initialValue
 * @returns
 */
export function createStore<T>(initialValue: T | StoreCallback<T>) {
	if (initialValue instanceof Function) {
		initialValue = initialValue();
	}
	const { subscribe, set, update } = writable(initialValue);
	subscribe((val) => {
		initialValue = val;
	});
	return {
		subscribe,
		set,
		update,
		get() {
			return initialValue;
		}
	};
}
