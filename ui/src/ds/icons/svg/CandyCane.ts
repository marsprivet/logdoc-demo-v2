import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CandyCane', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#candy-cane_svg__a)",
		children: jsx("path", {
			d: "M11.834 4.667 10 1.4M7.267 3.2l1.4 2.8m-3.4.467L6.6 9.4m-3.333.4 1.4 2.8M3.8 14a1.345 1.345 0 0 1-2.333-1.333L7.2 3.333a4.002 4.002 0 1 1 6.934 4A1.334 1.334 0 1 1 11.824 6a1.333 1.333 0 1 0-2.309-1.333L3.8 14Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "candy-cane_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
