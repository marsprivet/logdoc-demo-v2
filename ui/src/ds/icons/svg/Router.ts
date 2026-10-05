import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Router', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#router_svg__a)",
		children: jsx("path", {
			d: "M4.006 12H4m2.673 0h-.007M10 6.667v2.666m1.893-4.553a2.667 2.667 0 0 0-3.773 0m5.653-1.887a5.333 5.333 0 0 0-7.54 0m-3.567 6.44h10.667c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334H2.666a1.333 1.333 0 0 1-1.333-1.334v-2.666c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "router_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
