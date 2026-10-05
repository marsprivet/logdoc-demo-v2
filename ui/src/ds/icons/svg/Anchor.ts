import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Anchor', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#anchor_svg__a)",
		children: jsx("path", {
			d: "M8 14.667V5.333m0 9.334A6.667 6.667 0 0 1 1.333 8h2M8 14.667A6.667 6.667 0 0 0 14.666 8h-2M8 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "anchor_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
