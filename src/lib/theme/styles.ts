import { mode } from '$lib/utils';
import { defineStyle } from '@chakra-ui/styled-system';

export const styles = {
	global: defineStyle((props) => ({
		body: {
			bg: mode('gray.50', 'gray.800')(props),
			color: mode('gray.600', 'gray.300')(props)
		}
	}))
};
