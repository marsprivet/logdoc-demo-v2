import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FoldHorizontal', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#fold-horizontal_svg__a)",
		children: jsx("path", {
			d: "M1.333 8h4m0 0-2 2m2-2-2-2m11.333 2h-4m0 0 2-2m-2 2 2 2M8 1.333v1.334m0 2.666v1.334m0 2.666v1.334m0 2.666v1.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "fold-horizontal_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
