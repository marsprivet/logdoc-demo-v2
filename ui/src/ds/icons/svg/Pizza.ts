import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Pizza', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#pizza_svg__a)",
		children: jsx("path", {
			d: "M10 7.333h.006M7.333 10h.007m3.326.667h.007m-6.867.74a11.36 11.36 0 0 1 7.6-7.6m-10.073 6.86 13.333 4-4-13.334a13.333 13.333 0 0 0-9.333 9.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "pizza_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
