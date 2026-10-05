import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Cuboid', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cuboid_svg__a)",
		children: jsx("path", {
			d: "M6.666 14.667V9.333m0 0L1.5 6.1m5.166 3.233 7.847-4.58m-.433-.486L10.046 1.56A1.333 1.333 0 0 0 8.6 1.527l-6.634 4.08a1.333 1.333 0 0 0-.633 1.133v3.88a1.333 1.333 0 0 0 .587 1.107l4.033 2.713a1.333 1.333 0 0 0 1.447.033l6.633-4.08a1.333 1.333 0 0 0 .633-1.133V5.373a1.332 1.332 0 0 0-.586-1.106Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cuboid_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
