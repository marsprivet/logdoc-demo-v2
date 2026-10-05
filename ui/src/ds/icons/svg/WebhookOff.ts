import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('WebhookOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#webhook-off_svg__a)",
		children: jsx("path", {
			d: "M11.333 11.333H8c-.727-.013-1.294.614-1.667 1.267a2.651 2.651 0 1 1-4.62-2.6M6 2.267a2.667 2.667 0 0 1 4.346.44M4 11.333l2.066-3.866A1.667 1.667 0 0 0 6.104 6.1m7.429 7.433c-.451.31-.986.472-1.533.467m.4-5.333a2.666 2.666 0 0 1 2.238 2.276M8 4l.4.667M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "webhook-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
