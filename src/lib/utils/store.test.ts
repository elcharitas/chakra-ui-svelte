import { createStore } from './store';

describe('createStore', () => {
	it('should create a store with the initial value', () => {
		const store = createStore(() => 42);
		expect(store.get()).toBe(42);
	});

	it('should call the subscription function when the store is updated', () => {
		const subscription = vi.fn();
		const store = createStore(() => 42, subscription);
		store.set(43);
		expect(subscription).toHaveBeenCalledWith(43);
	});

	it('should return the initial value', () => {
		const store = createStore(() => 42);
		expect(store.initial).toBe(42);
	});

	it('should return the current value of the store', () => {
		const store = createStore(() => 42);
		expect(store.get()).toBe(42);
		store.set(43);
		expect(store.get()).toBe(43);
	});
});
