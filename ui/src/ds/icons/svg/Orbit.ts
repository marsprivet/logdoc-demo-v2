import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Orbit', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#orbit_svg__a)",
		children: jsx("path", {
			d: "M6.934 14.6A6.666 6.666 0 0 0 13.56 4.323M9 1.4A6.667 6.667 0 0 0 2.44 11.677M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-4.667a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Zm-9.333 9.334a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "orbit_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
