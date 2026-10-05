import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CompassOut', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#compass-out_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			jsx("path", { d: "M14.666 8A6.667 6.667 0 1 0 8 14.667" }),
			jsx("path", { d: "m10.827 5.173-1.413 4.24-4.24 1.414 1.413-4.24 4.24-1.414ZM13.333 14l2-2-2-2" }),
			jsx("path", { d: "M15.333 12H12a1.333 1.333 0 0 0-1.334 1.333V14.5" })
		]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "compass-out_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
