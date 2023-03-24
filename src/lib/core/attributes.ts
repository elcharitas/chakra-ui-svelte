import type { ChakraAction } from '$lib/types';

/**
 * Sets the specified attributes on the given element.
 *
 * @param node The node to set attributes on.
 * @param props The props of a component containing attributes.
 * @returns An object with an `update` function for updating the props.
 */
export const attributes: ChakraAction = (node, nodeProps) => {
	// Define the list of attributes to set.
	const validAttributes = ['id', 'title', 'viewBox', 'xmlns', 'fill', 'stroke'];

	const update = (newProps: typeof nodeProps) => {
		const props = { ...newProps, ...newProps?.props };
		// If an `as` property is provided, add all prototype properties of the specified element.
		if (node.tagName && typeof document !== 'undefined') {
			const prototypeAttributes = Object.getOwnPropertyNames(Object.getPrototypeOf(node));
			validAttributes.push(...prototypeAttributes);
		}

		// Set the valid attributes on the element.
		for (const attribute of validAttributes) {
			if (attribute in props && typeof props[attribute] !== 'function') {
				node.setAttribute(attribute, props[attribute] as string);
			}
		}
	};

	update(nodeProps);

	// Return an object with an `update` function for updating the attributes.
	return { update };
};
