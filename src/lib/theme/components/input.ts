import { defineStyleConfig, type StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode, getColor } from '$lib/utils';

const baseStyle = {
	width: '100%',
	minWidth: 0,
	outline: 0,
	position: 'relative',
	appearance: 'none',
	transitionProperty: 'common',
	transitionDuration: 'normal',
	_disabled: {
		opacity: 0.4,
		cursor: 'not-allowed'
	}
};

const sizes = {
	lg: {
		fontSize: 'lg',
		px: 4,
		h: 12,
		borderRadius: 'md'
	},
	md: {
		fontSize: 'md',
		px: 4,
		h: 10,
		borderRadius: 'md'
	},
	sm: {
		fontSize: 'sm',
		px: 3,
		h: 8,
		borderRadius: 'sm'
	},
	xs: {
		fontSize: 'xs',
		px: 2,
		h: 6,
		borderRadius: 'sm'
	}
};

function getDefaults(properties: StyleFunctionProps) {
	const { focusBorderColor: fc, errorBorderColor: ec } = properties;
	return {
		focusBorderColor: fc || mode('blue.500', 'blue.300')(properties),
		errorBorderColor: ec || mode('red.500', 'red.300')(properties)
	};
}

const variantOutline = (properties: StyleFunctionProps) => {
	const { theme } = properties;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(properties);

	return {
		border: '1px solid',
		borderColor: mode('whiteAlpha.50', 'gray.200')(properties),
		bg: 'inherit',
		_hover: {
			borderColor: mode('gray.300', 'whiteAlpha.400')(properties)
		},
		_readOnly: {
			boxShadow: 'none !important',
			userSelect: 'all'
		},
		_invalid: {
			borderColor: getColor(theme, ec),
			boxShadow: `0 0 0 1px ${getColor(theme, ec)}`
		},
		_focusVisible: {
			zIndex: 1,
			borderColor: getColor(theme, fc),
			boxShadow: `0 0 0 1px ${getColor(theme, fc)}`
		}
	};
};

const variantFilled = (properties: StyleFunctionProps) => {
	const { theme } = properties;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(properties);

	return {
		border: '2px solid',
		borderColor: 'transparent',
		bg: mode('gray.100', 'whiteAlpha.50')(properties),
		_hover: {
			bg: mode('gray.200', 'whiteAlpha.100')(properties)
		},
		_readOnly: {
			boxShadow: 'none !important',
			userSelect: 'all'
		},
		_invalid: {
			borderColor: getColor(theme, ec)
		},
		_focusVisible: {
			bg: 'transparent',
			borderColor: getColor(theme, fc)
		}
	};
};

const variantFlushed = (properties: StyleFunctionProps) => {
	const { theme } = properties;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(properties);

	return {
		borderBottom: '1px solid',
		borderColor: 'inherit',
		borderRadius: '0',
		px: '0',
		bg: 'transparent',
		_readOnly: {
			boxShadow: 'none !important',
			userSelect: 'all'
		},
		_invalid: {
			borderColor: getColor(theme, ec),
			boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`
		},
		_focusVisible: {
			borderColor: getColor(theme, fc),
			boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`
		}
	};
};

const variantUnstyled = {
	bg: 'transparent',
	px: '0',
	height: 'auto'
};

const variants = {
	outline: variantOutline,
	filled: variantFilled,
	flushed: variantFlushed,
	unstyled: variantUnstyled
};

export default defineStyleConfig({
	baseStyle,
	sizes,
	variants,
	defaultProps: {
		size: 'md',
		variant: 'outline',
		colorScheme: 'gray'
	}
});
