import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BringToFront', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bring-to-front_svg__a)",
		children: jsx("path", {
			d: "M2.666 6.667a1.333 1.333 0 0 1-1.333-1.334V2.667a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334m2.667 10.666a1.333 1.333 0 0 0 1.333 1.334h2.667a1.333 1.333 0 0 0 1.333-1.334v-2.666a1.333 1.333 0 0 0-1.333-1.334m-6.667-4h2.667c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334H6.666a1.333 1.333 0 0 1-1.333-1.334V6.667c0-.737.597-1.334 1.333-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bring-to-front_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
