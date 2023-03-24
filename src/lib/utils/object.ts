export type Dict<T = any> = Record<string, T>;

/**
 * Omit keys from an object
 *
 * @param object
 * @param keys
 */
export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result: Dict = {};

	for (const key of Object.keys(object)) {
		if (keys.includes(key as K)) continue;
		result[key] = object[key];
	}

	return result as Omit<T, K>;
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
export function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result = {} as { [P in K]: T[P] };

	for (const key of keys) {
		if (key in object) {
			result[key] = object[key];
		}
	}

	return result;
}

/**
 * Deeply merge two objects.
 * If a key exists in both objects, the value from the second object will be used.
 *
 * @param obj1
 * @param obj2
 */
export function deepMerge<T extends Dict>(obj1: Partial<T>, obj2: Partial<T>) {
	const result = { ...obj1 };
	for (const key in obj2) {
		if (obj2.hasOwnProperty(key)) {
			if (
				typeof obj2[key] === 'object' &&
				!Array.isArray(obj2[key]) &&
				obj1.hasOwnProperty(key) &&
				typeof obj1[key] === 'object' &&
				!Array.isArray(obj1[key])
			) {
				result[key] = deepMerge(obj1[key], obj2[key]) as T[Extract<keyof T, string>];
			} else {
				result[key] = obj2[key];
			}
		}
	}
	return result;
}
