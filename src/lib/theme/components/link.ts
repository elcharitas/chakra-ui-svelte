import { defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = {
	padding: 0,
	height: 'auto',
	lineHeight: 'normal',
	verticalAlign: 'baseline',
	color: 'green.500',
	cursor: 'pointer',
	border: 'none',
	transitionProperty: 'common',
	transitionDuration: 'normal',
	textDecoration: 'none',
	_hover: {
		textDecoration: 'underline',
		_disabled: {
			textDecoration: 'none'
		}
	},
	_active: {
		color: 'green.800',
		textDecoration: 'none'
	},
	_focus: {
		boxShadow: 'outline',
		textDecoration: 'none'
	},
	_disabled: {
		opacity: 0.4,
		cursor: 'not-allowed',
		boxShadow: 'none',
		textDecoration: 'none'
	}
};

export default defineStyleConfig({
	baseStyle,
	defaultProps: {
		size: 'md',
		colorScheme: 'primary'
	}
});
