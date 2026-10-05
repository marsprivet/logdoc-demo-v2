import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ServerCrash', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#server-crash_svg__a)",
		children: jsx("path", {
			d: "M4 6.667H2.666a1.333 1.333 0 0 1-1.333-1.334V2.667a1.333 1.333 0 0 1 1.333-1.334h10.667a1.333 1.333 0 0 1 1.333 1.334v2.666a1.333 1.333 0 0 1-1.333 1.334H12M4 9.333H2.666a1.333 1.333 0 0 0-1.333 1.334v2.666a1.333 1.333 0 0 0 1.333 1.334h10.667a1.333 1.333 0 0 0 1.333-1.334v-2.666a1.333 1.333 0 0 0-1.333-1.334H12M4 4h.006M4 12h.006m4.66-8L6 8h4l-2.667 4",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "server-crash_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
