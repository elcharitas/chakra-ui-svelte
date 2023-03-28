import { omit, pick, filter } from './object';

const testObject = {
	name: 'Jonathan',
	age: 30,
	email: 'jonathan@example.com',
	address: {
		street: '123 Main St',
		city: 'Anytown',
		state: 'CA',
		zip: '12345'
	}
};

describe('omit', () => {
	it('should omit a single key', () => {
		const result = omit(testObject, ['name']);
		expect(result).toEqual({
			age: 30,
			email: 'jonathan@example.com',
			address: {
				street: '123 Main St',
				city: 'Anytown',
				state: 'CA',
				zip: '12345'
			}
		});
	});

	it('should omit multiple keys', () => {
		const result = omit(testObject, ['name', 'email']);
		expect(result).toEqual({
			age: 30,
			address: {
				street: '123 Main St',
				city: 'Anytown',
				state: 'CA',
				zip: '12345'
			}
		});
	});

	it('should return the original object if no keys are specified', () => {
		const result = omit(testObject, []);
		expect(result).toEqual(testObject);
	});
});

describe('filter', () => {
	it('should filter by a single key', () => {
		const result = filter(testObject, (_, key) => key === 'name');
		expect(result).toEqual({
			name: 'Jonathan'
		});
	});

	it('should filter by multiple keys', () => {
		const result = filter(testObject, (_, key) => ['name', 'age'].includes(key));
		expect(result).toEqual({
			name: 'Jonathan',
			age: 30
		});
	});

	it('should filter by a nested key', () => {
		const result = filter(testObject.address, (_, key) => key === 'street');
		expect(result).toEqual({
			street: '123 Main St'
		});
	});

	it('should return an empty object if no keys match', () => {
		const result = filter(testObject, (_, key) => key === ('foo' as typeof key)); // this hack is needed to make TS happy
		expect(result).toEqual({});
	});
});

describe('pick', () => {
	it('should pick a single key', () => {
		const result = pick(testObject, ['name']);
		expect(result).toEqual({
			name: 'Jonathan'
		});
	});

	it('should pick multiple keys', () => {
		const result = pick(testObject, ['name', 'age']);
		expect(result).toEqual({
			name: 'Jonathan',
			age: 30
		});
	});

	it('should return an empty object if no keys are specified', () => {
		const result = pick(testObject, []);
		expect(result).toEqual({});
	});
});
