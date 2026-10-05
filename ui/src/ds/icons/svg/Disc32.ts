import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Disc32', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#disc-3-2_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", { d: "M14.666 8A6.667 6.667 0 1 0 8 14.667" }), jsx("path", { d: "M4 8c0-1.133.467-2.133 1.2-2.8M8 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM12 14.667V9.333M10 11.333l2-2 2 2" })]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "disc-3-2_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
