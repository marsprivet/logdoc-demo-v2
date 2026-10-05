import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Radius', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#radius_svg__a)",
		children: jsx("path", {
			d: "M13.56 11.68a6.666 6.666 0 1 0-1.88 1.88M8.94 8.94l2.787 2.787m2.273.94a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM9.333 8a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "radius_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
