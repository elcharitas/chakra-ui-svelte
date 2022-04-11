import { css, toCSSVar } from '@chakra-ui/styled-system';
import { theme } from '$lib/theme';
import { system } from './emotion';

export function styled(node: HTMLElement, props: unknown) {
	function update(props) {
		const generateCSS = css(props)(toCSSVar(theme));
		const className = system(generateCSS);

		node.classList.add(className);
	}

	update(props);

	return { update };
}
