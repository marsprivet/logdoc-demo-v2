import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BadgePoundSterling', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#badge-pound-sterling_svg__a)",
		children: jsx("path", {
			d: "M5.333 8H8m-1.333 2.667V6.333a1.667 1.667 0 1 1 3.333 0m-4.667 4.334H10m-7.433-4.92a2.667 2.667 0 0 1 3.186-3.18 2.667 2.667 0 0 1 4.494 0 2.666 2.666 0 0 1 3.187 3.186 2.666 2.666 0 0 1 0 4.494 2.667 2.667 0 0 1-3.18 3.186 2.668 2.668 0 0 1-4.5 0 2.667 2.667 0 0 1-3.187-3.18 2.667 2.667 0 0 1 0-4.506Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "badge-pound-sterling_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
