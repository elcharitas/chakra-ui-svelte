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

function getDefaults(props: Record<string, any>) {
	const { focusBorderColor: fc, errorBorderColor: ec } = props;
	return {
		focusBorderColor: fc || mode('blue.500', 'blue.300')(props),
		errorBorderColor: ec || mode('red.500', 'red.300')(props)
	};
}

const variantOutline = (props) => {
	const { theme } = props;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

	return {
		border: '1px solid',
		borderColor: mode('whiteAlpha.50', 'gray.200')(props),
		bg: 'inherit',
		_hover: {
			borderColor: mode('gray.300', 'whiteAlpha.400')(props)
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

const variantFilled = (props) => {
	const { theme } = props;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

	return {
		border: '2px solid',
		borderColor: 'transparent',
		bg: mode('gray.100', 'whiteAlpha.50')(props),
		_hover: {
			bg: mode('gray.200', 'whiteAlpha.100')(props)
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

const variantFlushed = (props) => {
	const { theme } = props;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

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

export default {
	baseStyle,
	sizes,
	variants,
	defaultProps: {
		size: 'md',
		variant: 'outline',
		colorScheme: 'gray'
	}
};
