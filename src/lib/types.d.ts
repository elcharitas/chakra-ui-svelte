import type { StyleProps } from '@chakra-ui/styled-system';

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace jest {
		interface Matchers<R> {
			toBeInTheDocument(): R;
			toHaveAttribute(name: string, value: string): R;
		}
	}
}

export type ChakraActionCycle<T = unknown> = {
	destroy?: () => void;
	update?: (newProps: T) => void;
};

export type ChakraAction<T = ChakraComponentProps> = (
	node: Element,
	props: T
) => ChakraActionCycle<T>;

export type ChakraActionNoProps = (node: Element) => ChakraActionCycle;

export type ChakraElementAs = keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;

export interface ChakraComponentProps extends StyleProps {
	[key: string]: unknown;

	/**
	 * The class name to apply to the component.
	 */
	class?: string;
	/**
	 * Optionally render the component as a different element or component.
	 *
	 * Defaults to `div`.
	 */
	as?: ChakraElementAs | ConstructorOfATypedSvelteComponent;
	/**
	 * Wrap the component in with a HTML element or don't wrap it at all.
	 * This is useful when you want to render a component wrapped with a different element
	 *
	 * Defaults to `false`.
	 */
	wrap?: boolean | ChakraElementAs;
	/** Styles applied to a component */
	sx?: StyleProps & {
		[rule: string]: string | number | StyleProps;
	};
	/** Props applied to underlying element */
	props?: Record<string, string>;
	/** A drilled action which would bubble events to the next available element */
	events?: ChakraActionNoProps;
	/**
	 * Render the component without slots.
	 * This is useful for elements like `input` which don't support slots.
	 *
	 * Defaults to `false`.
	 */
	noSlot?: boolean;
}
