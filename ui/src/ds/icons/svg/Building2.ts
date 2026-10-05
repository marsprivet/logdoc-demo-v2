import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Building2', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#building-2_svg__a)",
		children: jsx("path", {
			d: "M4 14.667v-12a1.333 1.333 0 0 1 1.333-1.334h5.333A1.333 1.333 0 0 1 12 2.667v12m-8 0h8m-8 0H2.666a1.334 1.334 0 0 1-1.333-1.334v-4A1.333 1.333 0 0 1 2.666 8H4m8 6.667h1.333a1.333 1.333 0 0 0 1.333-1.334v-6A1.333 1.333 0 0 0 13.333 6H12M6.666 4h2.667M6.666 6.667h2.667M6.666 9.333h2.667M6.666 12h2.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "building-2_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
