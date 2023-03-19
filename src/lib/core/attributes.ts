/**
 * Sets the specified attributes on the given element.
 *
 * @param node The node to set attributes on.
 * @param props The props of a component containing attributes.
 * @returns An object with an `update` function for updating the props.
 */
export const attributes = (node: Element, props: Record<string, string>) => {
	// Define the list of attributes to set.
	const validAttributes = ['id', 'title', 'viewBox', 'xmlns', 'fill', 'stroke'];

	// If an `as` property is provided, add all prototype properties of the specified element.
	if (props.as && typeof props.as === 'string' && typeof document !== 'undefined') {
		const prototypeAttributes = Object.getOwnPropertyNames(
			Object.getPrototypeOf(document.createElement(props.as))
		);
		validAttributes.push(...prototypeAttributes);
	}

	// Set the valid attributes on the element.
	for (const attribute of validAttributes) {
		if (attribute in props && typeof props[attribute] !== 'function' && props[attribute]) {
			node.setAttribute(attribute, props[attribute]);
		}
	}

	// Return an object with an `update` function for updating the attributes.
	return {
		update(newProps: Record<string, string>) {
			props = newProps;
		}
	};
};
