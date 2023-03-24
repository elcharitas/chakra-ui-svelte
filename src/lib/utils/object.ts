export type Dict<T = unknown> = Record<string, T>;

/**
 * Omit keys from an object
 *
 * @param object
 * @param keys
 */
export function omit<T extends Dict>(object: T, keys: (keyof T)[]) {
	return filter(object, (_, key) => !keys.includes(key));
}

/**
 * Filter an object by a predicate function
 *
 * @param object
 * @param predicate
 */
export function filter<T extends Dict>(
	object: T,
	predicate: (value: T[keyof T], key: keyof T) => boolean
) {
	const result = {} as T;
	const filtered = Object.keys(object).filter((key: keyof T) => {
		return predicate(object[key], key);
	});
	for (const key of filtered) {
		result[key as keyof T] = object[key] as T[keyof T];
	}
	return result;
}

/**
 * Pick a subset of keys from an object
 *
 * @param object
 * @param keys
 */
export function pick<T extends Dict>(object: T, keys: (keyof T)[]) {
	return filter(object, (_, key) => keys.includes(key));
}
