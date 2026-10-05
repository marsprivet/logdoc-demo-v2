import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Boxes', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#boxes_svg__a)",
		children: jsx("path", {
			d: "m8 12.667-2.647 1.586a1.334 1.334 0 0 1-1.373 0l-2-1.2a1.334 1.334 0 0 1-.647-1.14v-2.16a1.333 1.333 0 0 1 .647-1.14L4.666 7M8 12.667V9m0 3.667 2.646 1.586a1.334 1.334 0 0 0 1.374 0l2-1.2a1.333 1.333 0 0 0 .646-1.14v-2.16a1.333 1.333 0 0 0-.646-1.14L11.333 7M8 9 4.666 7M8 9l-3.334 2M8 9l3.333-2M8 9l3.333 2M8 9V5.333M4.666 7V4.087a1.333 1.333 0 0 1 .647-1.14l2-1.2a1.333 1.333 0 0 1 1.373 0l2 1.2a1.333 1.333 0 0 1 .647 1.14V7m-6.667 4-3.16-1.9m3.16 1.9v3.447M11.333 11l3.16-1.9m-3.16 1.9v3.447M8 5.333l-3.16-1.9M8 5.333l3.16-1.9",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "boxes_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
