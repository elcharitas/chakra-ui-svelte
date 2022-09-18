import createEmotion from '@emotion/css/create-instance';
import { theme } from '$lib/theme';

export const { cx, css: system, injectGlobal, keyframes, merge } = createEmotion({
	key: theme?.config?.cssVarPrefix ?? 'chakra',
	speedy: true
});
