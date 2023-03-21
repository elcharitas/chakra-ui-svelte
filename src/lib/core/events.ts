import type { ChakraActionNoProps } from '$lib/types';
import type { SvelteComponent } from 'svelte';
import { bubble, get_current_component, listen } from 'svelte/internal';

const knownEvents = [
	'focus',
	'blur',
	'fullscreenchange',
	'fullscreenerror',
	'scroll',
	'cut',
	'copy',
	'paste',
	'keydown',
	'keypress',
	'keyup',
	'auxclick',
	'click',
	'contextmenu',
	'dblclick',
	'mousedown',
	'mouseenter',
	'mouseleave',
	'mousemove',
	'mouseover',
	'mouseout',
	'mouseup',
	'pointerlockchange',
	'pointerlockerror',
	'select',
	'wheel',
	'drag',
	'dragend',
	'dragenter',
	'dragstart',
	'dragleave',
	'dragover',
	'drop',
	'touchcancel',
	'touchend',
	'touchmove',
	'touchstart',
	'pointerover',
	'pointerenter',
	'pointerdown',
	'pointermove',
	'pointerup',
	'pointercancel',
	'pointerout',
	'pointerleave',
	'gotpointercapture',
	'lostpointercapture'
];

/**
 * Components in svelte are not event emitters, so we need to manually
 * forward events from the component to the underlying DOM element.
 * This is a builder. It builds a svelte action used to forward
 * events from the component to the underlying DOM element.
 *
 * @param additionalEvents The additional set of events to listen for
 */
export function forwardEvents(additionalEvents: string[] = []): ChakraActionNoProps {
	const component: SvelteComponent = get_current_component();
	const events = [...knownEvents, ...additionalEvents];

	function forward(e: Event) {
		bubble(component, e);
	}

	return (node) => {
		const destructors: (() => void)[] = [];

		for (const event of events) {
			if (node.addEventListener) {
				destructors.push(
					listen(node, event, forward, {
						passive: false
					})
				);
			}
		}

		return {
			destroy: () => {
				for (const d of destructors) d();
			}
		};
	};
}
