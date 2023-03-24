import { defineStyleConfig } from '@chakra-ui/styled-system';

const sizes = {
	lg: {
		h: 12,
		w: 12
	},
	md: {
		h: 10,
		w: 10
	},
	sm: {
		h: 8,
		w: 8
	},
	xs: {
		h: 6,
		w: 6
	}
};

export default defineStyleConfig({
	sizes,
	defaultProps: {
		size: 'xs',
		colorScheme: 'gray'
	}
});
