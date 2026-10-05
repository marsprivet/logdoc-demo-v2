import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('TrafficCone', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#traffic-cone_svg__a)",
		children: jsx("path", {
			d: "M6.2 4.133a3.033 3.033 0 0 0 3.6 0m-4.534 3C5.866 7.667 6.866 8 8 8c1.133 0 2.133-.333 2.733-.867M5 8.133l-3.134 1.8c-.333.2-.533.467-.533.734 0 .266.2.533.533.733l5.067 3c.6.333 1.4.333 2 0l5.067-3c.466-.2.666-.467.666-.733 0-.267-.2-.534-.533-.734L11 8.067M9.266 2.333a1.287 1.287 0 0 0-2.533-.066l-2 6.666c-.067.134-.067.267-.067.4 0 1.134 1.467 2 3.334 2 1.866 0 3.333-.866 3.333-2 0-.133 0-.266-.067-.333l-2-6.667Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "traffic-cone_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
