import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Earth', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#earth_svg__a)",
		children: jsx("path", {
			d: "M14.36 10h-3.027A1.333 1.333 0 0 0 10 11.333v3.027M4.666 2.227v1.106a2 2 0 0 0 2 2A1.333 1.333 0 0 1 8 6.667a1.333 1.333 0 0 0 2.667 0c0-.734.6-1.334 1.333-1.334h2.113m-6.78 9.3V12A1.333 1.333 0 0 0 6 10.667a1.333 1.333 0 0 1-1.334-1.334v-.666a1.333 1.333 0 0 0-1.333-1.334H1.366m13.3.667A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.333 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "earth_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
