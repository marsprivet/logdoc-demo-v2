import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Link', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#link_svg__a)",
		children: jsx("path", {
			d: "M6.667 8.667a3.333 3.333 0 0 0 5.027.36l2-2A3.333 3.333 0 0 0 8.98 2.313l-1.147 1.14m1.5 3.88a3.334 3.334 0 0 0-5.026-.36l-2 2a3.333 3.333 0 0 0 4.713 4.714l1.14-1.14",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "link_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
