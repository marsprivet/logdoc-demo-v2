import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ServerOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#server-off_svg__a)",
		children: jsx("path", {
			d: "M4.666 1.333h8.667a1.333 1.333 0 0 1 1.333 1.334v2.666a1.333 1.333 0 0 1-1.333 1.334H10m4.666 4.666v-.666a1.333 1.333 0 0 0-1.333-1.334h-.667m2 5.334-.333-.334-.667.334h-11a1.333 1.333 0 0 1-1.333-1.334v-2.666a1.333 1.333 0 0 1 1.333-1.334h6.667l5.333 5.334Zm0 0L1.333 1.333M4 12h.006m2.66-5.333-5-5c-.333-.334-.333 0-.333 1.666v2a1.333 1.333 0 0 0 1.333 1.334h4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "server-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
