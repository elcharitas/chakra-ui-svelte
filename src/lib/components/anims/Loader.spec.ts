import { render } from '@testing-library/svelte';
import Loader from './Loader.svelte';
import '@testing-library/jest-dom';

describe('Loader', () => {
	it('finds the SVG element', async () => {
		const { container } = render(Loader);
		const svgElement = container.querySelector('svg');
		expect(svgElement).toBeInTheDocument();
	});

	it('finds the circle element', async () => {
		const { container } = render(Loader);
		const circleElement = container.querySelector('circle');
		expect(circleElement).toBeInTheDocument();
	});
});
