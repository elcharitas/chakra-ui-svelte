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

export function forwardEvents(additionalEvents: string[] = []) {
	const component: SvelteComponent = get_current_component();
	const events = [...knownEvents, ...additionalEvents];

	function forward(e: Event) {
		bubble(component, e);
	}

	return (node: EventTarget) => {
		const destructors = [];

		events.forEach((event) => {
			if (node.addEventListener) {
				destructors.push(listen(node, event, forward));
			}
		});

		return {
			destroy: () => {
				destructors.forEach((d) => d());
			}
		};
	};
}
