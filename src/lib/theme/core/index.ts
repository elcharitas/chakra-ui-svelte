import borders from './borders.js';
import breakpoints from './breakpoints.js';
import colors from './colors.js';
import radii from './radius.js';
import shadows from './shadows.js';
import sizes from './sizes.js';
import { spacing } from './spacing.js';
import transition from './transition.js';
import typography from './typography.js';
import zIndices from './z-index.js';
import blur from './blur.js';

const core = {
	breakpoints,
	zIndices,
	radii,
	blur,
	colors,
	...typography,
	sizes,
	shadows,
	space: spacing,
	borders,
	transition
};

export default core;
