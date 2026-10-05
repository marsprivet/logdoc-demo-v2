import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignEndHorizontal', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-end-horizontal_svg__a)",
		children: jsx("path", {
			d: "M14.666 14.667H1.333M4 1.333h1.333c.736 0 1.333.597 1.333 1.334v8c0 .736-.597 1.333-1.333 1.333H4a1.333 1.333 0 0 1-1.334-1.333v-8c0-.737.597-1.334 1.334-1.334ZM10.666 6H12c.736 0 1.333.597 1.333 1.333v3.334c0 .736-.597 1.333-1.333 1.333h-1.334a1.333 1.333 0 0 1-1.333-1.333V7.333C9.333 6.597 9.93 6 10.666 6Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-end-horizontal_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
