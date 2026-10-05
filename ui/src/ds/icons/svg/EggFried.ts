import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('EggFried', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#egg-fried_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", { d: "M7.666 10.667a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z" }), jsx("path", { d: "M2 5.333c0-2.333 1.666-4 4.333-4 3.333 0 3.22 2 5 3.334 1.78 1.333 3.333 1.333 3.333 4C14.666 11.667 13 13 10 13c-1.667 0-1.667 1.667-4 1.667-2.334 0-4.667-1.334-4.667-3.667 0-2 1-2 1-3.333C2.333 6.667 2 6 2 5.333Z" })]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "egg-fried_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
