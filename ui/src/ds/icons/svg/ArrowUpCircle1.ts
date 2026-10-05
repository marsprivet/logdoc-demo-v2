import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ArrowUpCircle1', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#arrow-up-circle-1_svg__a)",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", {
			d: "M8 14.667A6.667 6.667 0 1 1 8 1.333a6.667 6.667 0 0 1 0 13.334Z",
			fill: "#C0C1C3",
			stroke: "inherit"
		}), jsx("path", {
			d: "M7 5.333 9.667 8 7 10.667",
			stroke: "#0B0C0E"
		})]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "arrow-up-circle-1_svg__a",
		children: jsx("path", {
			fill: "#fff",
			transform: "matrix(-1 0 0 1 16 0)",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
