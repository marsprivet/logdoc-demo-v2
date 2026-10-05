import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MapPinned', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#map-pinned_svg__a)",
		children: jsx("path", {
			d: "M5.81 9.333H3.336a.667.667 0 0 0-.632.456l-1.336 4a.667.667 0 0 0 .632.878h12a.668.668 0 0 0 .632-.878l-1.333-4a.666.666 0 0 0-.633-.456h-2.474m1.808-4c0 2.409-2.579 4.953-3.595 5.864a.667.667 0 0 1-.81 0C6.58 10.286 4 7.742 4 5.333a4 4 0 1 1 8 0Zm-2.666 0a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "map-pinned_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
