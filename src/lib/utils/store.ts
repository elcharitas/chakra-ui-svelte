import { writable } from 'svelte/store';

type StoreCallback<T> = (cached?: T) => T;

/**
 * Creates a custom store for use by Chakra UI Svelte
 *
 * @param key used to cache the value
 * @param initialValue
 * @returns
 */
export function createStore<T>(key: string, initialValue: T | StoreCallback<T>) {
	key = 'chakra-ui-' + key;
	if (initialValue instanceof Function) {
		initialValue = initialValue(localStorage.getItem(key) as unknown as T);
	}
	const { subscribe, set, update } = writable(initialValue);
	subscribe((val) => {
		initialValue = val;
		localStorage.setItem(key, JSON.stringify(val));
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
