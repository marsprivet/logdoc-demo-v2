import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Dessert', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#dessert_svg__a)",
		children: jsx("path", {
			d: "M6.8 2.133C3.666 2.667 1.333 5.4 1.333 8.667a1.333 1.333 0 1 0 2.667 0V8a1.333 1.333 0 0 1 2.666 0v2.667a1.333 1.333 0 1 0 2.667 0V8A1.333 1.333 0 1 1 12 8v.667a1.333 1.333 0 1 0 2.666 0c0-3.267-2.333-6-5.466-6.534M2.133 9.867a6 6 0 0 0 11.733 0m-4.533-7.2a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "dessert_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
