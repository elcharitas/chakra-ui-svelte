import { runIfFn, mode, transparentize, getColor } from './theme-tools';

const testTheme = {
	colors: {
		red: '#ff0000',
		blue: '#0000ff'
	}
};

describe('mode', () => {
	it('should return the light value in light mode', () => {
		const result = mode('light', 'dark')({ colorMode: 'light' });
		expect(result).toBe('light');
	});

	it('should return the dark value in dark mode', () => {
		const result = mode('light', 'dark')({ colorMode: 'dark' });
		expect(result).toBe('dark');
	});
});

describe('getColor', () => {
	it('should return the color value from the theme', () => {
		const result = getColor(testTheme, 'red');
		expect(result).toBe('#ff0000');
	});

	it('should return the fallback value if the color is not in the theme', () => {
		const result = getColor(testTheme, 'green', '#00ff00');
		expect(result).toBe('#00ff00');
	});

	it('should return undefined if the color is not in the theme and no fallback is provided', () => {
		const result = getColor(testTheme, 'green');
		expect(result).toBeUndefined();
	});
});

describe('transparentize', () => {
	it('should return the transparentized color', () => {
		const result = transparentize('red', 0.5)(testTheme as unknown);
		expect(result).toBe('ff 00 00 0.5');
	});
});

describe('runIfFn', () => {
	it('should return the value if it is not a function', () => {
		const result = runIfFn('foo');
		expect(result).toBe('foo');
	});

	it('should call the function with the arguments if the value is a function', () => {
		const fn = vi.fn((a, b) => a + b);
		const result = runIfFn(fn, 2, 3);
		expect(fn).toHaveBeenCalledWith(2, 3);
		expect(result).toBe(5);
	});
});
