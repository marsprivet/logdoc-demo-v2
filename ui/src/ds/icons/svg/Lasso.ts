import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Lasso', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#lasso_svg__a)",
		children: jsx("path", {
			d: "M4.666 14.667A3.333 3.333 0 0 1 3.333 12m0 0a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667ZM2.2 9.333a4.533 4.533 0 0 1-.867-2.666c0-2.934 3-5.334 6.667-5.334 3.666 0 6.666 2.4 6.666 5.334C14.666 9.6 11.666 12 8 12a8 8 0 0 1-3.334-.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "lasso_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
