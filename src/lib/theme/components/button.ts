import { colorModeValue, transparentize } from '$lib/utils';

const baseStyle = {
	cursor: 'pointer',
	border: 'none',
	lineHeight: '1.2',
	borderRadius: 'md',
	fontWeight: 'semibold',
	transitionProperty: 'common',
	transitionDuration: 'normal',
	_focus: {
		boxShadow: 'outline'
	},
	_disabled: {
		opacity: 0.4,
		cursor: 'not-allowed',
		boxShadow: 'none'
	},
	_hover: {
		_disabled: {
			bg: 'initial'
		}
	}
};

const variantGhost = (props) => {
	const { colorScheme: c, theme } = props;

	if (c === 'gray') {
		return {
			color: colorModeValue(`inherit`, `whiteAlpha.900`),
			_hover: {
				bg: colorModeValue(`gray.100`, `whiteAlpha.200`)
			},
			_active: { bg: colorModeValue(`gray.200`, `whiteAlpha.300`) }
		};
	}

	const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
	const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

	return {
		color: colorModeValue(`${c}.600`, `${c}.200`),
		bg: 'transparent',
		_hover: {
			bg: colorModeValue(`${c}.50`, darkHoverBg)
		},
		_active: {
			bg: colorModeValue(`${c}.100`, darkActiveBg)
		}
	};
};

const variantOutline = (props) => {
	const { colorScheme: c } = props;
	const borderColor = colorModeValue(`gray.200`, `whiteAlpha.300`);
	return {
		border: '1px solid',
		borderColor: c === 'gray' ? borderColor : 'currentColor',
		...variantGhost(props)
	};
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap = {
	yellow: {
		bg: 'yellow.400',
		color: 'black',
		hoverBg: 'yellow.500',
		activeBg: 'yellow.600'
	},
	cyan: {
		bg: 'cyan.400',
		color: 'black',
		hoverBg: 'cyan.500',
		activeBg: 'cyan.600'
	}
};

const variantSolid = (props) => {
	const { colorScheme: c } = props;

	if (c === 'gray') {
		const bg = colorModeValue(`gray.100`, `whiteAlpha.200`);

		return {
			bg,
			_hover: {
				bg: colorModeValue(`gray.200`, `whiteAlpha.300`),
				_disabled: {
					bg
				}
			},
			_active: { bg: colorModeValue(`gray.300`, `whiteAlpha.400`) }
		};
	}

	const {
		bg = `${c}.500`,
		color = 'white',
		hoverBg = `${c}.600`,
		activeBg = `${c}.700`
	} = accessibleColorMap[c] ?? {};

	const background = colorModeValue(bg, `${c}.200`);

	return {
		bg: background,
		color: colorModeValue(color, `gray.800`),
		_hover: {
			bg: colorModeValue(hoverBg, `${c}.300`),
			_disabled: {
				bg: background
			}
		},
		_active: { bg: colorModeValue(activeBg, `${c}.400`) }
	};
};

const variantLink = (props) => {
	const { colorScheme: c } = props;
	return {
		padding: 0,
		height: 'auto',
		lineHeight: 'normal',
		verticalAlign: 'baseline',
		color: colorModeValue(`${c}.500`, `${c}.200`),
		_hover: {
			textDecoration: 'underline',
			_disabled: {
				textDecoration: 'none'
			}
		},
		_active: {
			color: colorModeValue(`${c}.700`, `${c}.500`)
		}
	};
};

const variantUnstyled = {
	bg: 'none',
	color: 'inherit',
	display: 'inline',
	lineHeight: 'inherit',
	m: 0,
	p: 0
};

const variants = {
	ghost: variantGhost,
	outline: variantOutline,
	solid: variantSolid,
	link: variantLink,
	unstyled: variantUnstyled
};

const sizes = {
	lg: {
		h: 12,
		minW: 12,
		fontSize: 'lg',
		px: 6
	},
	md: {
		h: 10,
		minW: 10,
		fontSize: 'md',
		px: 4
	},
	sm: {
		h: 8,
		minW: 8,
		fontSize: 'sm',
		px: 3
	},
	xs: {
		h: 6,
		minW: 6,
		fontSize: 'xs',
		px: 2
	}
};

const defaultProps = {
	variant: 'solid',
	size: 'md',
	colorScheme: 'gray'
};

export default {
	baseStyle,
	variants,
	sizes,
	defaultProps
};
