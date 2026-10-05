import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Spade', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#spade_svg__a)",
		children: jsx("path", {
			d: "M8 12c-1 1-1.8 1.333-3 1.333a3.667 3.667 0 0 1-3.667-3.666c0-1.534 1-2.667 2-3.667L8 1.333 12.666 6c1 1 2 2.133 2 3.667A3.666 3.666 0 0 1 11 13.333C9.8 13.333 9 13 8 12Zm0 0v2.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "spade_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
