export type Dict<T = unknown> = Record<string, T>;

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result: Dict = {};

	Object.keys(object).forEach((key) => {
		if (keys.includes(key as K)) return;
		result[key] = object[key];
	});

	return result as Omit<T, K>;
}

export function filter<T extends Dict>(
	object: T,
	predicate: (value: T[keyof T], key: keyof T) => boolean
) {
	const result = {} as T;
	Object.keys(object)
		.filter((key: keyof T) => {
			return predicate(object[key], key);
		})
		.forEach((key: keyof T) => {
			result[key] = object[key];
		});
	return result;
}

export function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
	const result = {} as { [P in K]: T[P] };

	keys.forEach((key) => {
		if (key in object) {
			result[key] = object[key];
		}
	});

	return result;
}
