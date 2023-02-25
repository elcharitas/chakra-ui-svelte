/**
 * Ideally, we should be able to use the `props` attribute to forward all props to the underlying element.
 * However, this would be really troublesome to maintain as we would have to manually add all props to the `props` attribute.
 * Instead, we use the `as` attribute to determine the underlying element and forward all props to it.
 *
 * If the `as` attribute is a string, we use the `svelte:element` component to forward all props to the underlying element.
 * In future versions of Svelte, we can use the `use:props` directive to forward all props to the underlying element.
 * The `props` attribute may also become deprecated.
 *
 * @param props The props to forward
 */
export const attributes = (node: Element, props: Record<string, string>) => {
	const selector = props.as;
	let attrs: string[] = ['title', 'viewBox', 'xmlns', 'fill', 'stroke'];
	if (typeof selector === 'string' && typeof document !== 'undefined') {
		const element = document.createElement(selector);
		attrs = [...attrs, ...Object.keys(Object.getPrototypeOf(element))];
	}
	attrs.forEach((attr) => {
		if (props[attr] && typeof props[attr] !== 'function') {
			node.setAttribute(attr, props[attr]);
		}
	});
	return {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		destroy() {}
	};
};
