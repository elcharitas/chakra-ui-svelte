export type Dict<T = any> = Record<string, T>;

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result: Dict = {};

	for (const key of Object.keys(object)) {
		if (keys.includes(key as K)) continue;
		result[key] = object[key];
	}

	return result as Omit<T, K>;
}

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

export function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result = {} as { [P in K]: T[P] };

	for (const key of keys) {
		if (key in object) {
			result[key] = object[key];
		}
	}

	return result;
}
