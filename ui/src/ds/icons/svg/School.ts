import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('School', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#school_svg__a)",
		children: jsx("path", {
			d: "M9.333 14.667V12a1.333 1.333 0 1 0-2.667 0v2.667m5.334-8L14.666 8v5.333a1.333 1.333 0 0 1-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334V8L4 6.667m8-3.334v11.334M2.666 4 8 1.333 13.333 4M4 3.333v11.334M9.333 6a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "school_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
