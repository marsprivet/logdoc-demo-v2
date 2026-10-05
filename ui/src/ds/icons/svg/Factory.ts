import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Factory', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#factory_svg__a)",
		children: jsx("path", {
			d: "M11.333 12H12m-4 0h.666m-4 0h.667m-4 1.333a1.333 1.333 0 0 0 1.333 1.334h10.667a1.333 1.333 0 0 0 1.333-1.334v-8L10 8.667V5.333L5.333 8.667v-6A1.333 1.333 0 0 0 4 1.333H2.666a1.333 1.333 0 0 0-1.333 1.334v10.666Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "factory_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
