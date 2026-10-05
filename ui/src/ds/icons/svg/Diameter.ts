import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Diameter', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#diameter_svg__a)",
		children: jsx("path", {
			d: "M4.32 2.44a6.667 6.667 0 0 1 9.24 9.24M4.273 4.273l7.454 7.454M2.44 4.32a6.667 6.667 0 0 0 9.24 9.24m2.32-.893a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM4.666 3.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "diameter_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
