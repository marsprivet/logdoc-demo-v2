import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Ruler', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#ruler_svg__a)",
		children: jsx("path", {
			d: "M9.667 8.333 11 7m-3.333-.667L9 5m-3.333-.667L7 3m4.666 7.333L13 9m1.2 1.2a1.6 1.6 0 0 1 0 2.267L12.467 14.2a1.6 1.6 0 0 1-2.267 0L1.8 5.8a1.607 1.607 0 0 1 0-2.267L3.533 1.8a1.607 1.607 0 0 1 2.267 0l8.4 8.4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "ruler_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
