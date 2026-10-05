import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignVerticalJustifyEnd', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-vertical-justify-end_svg__a)",
		children: jsx("path", {
			d: "M1.333 14.667h13.333M4.666 8h6.667c.736 0 1.333.597 1.333 1.333v1.334c0 .736-.597 1.333-1.333 1.333H4.666a1.333 1.333 0 0 1-1.333-1.333V9.333C3.333 8.597 3.93 8 4.666 8ZM6 1.333h4c.736 0 1.333.597 1.333 1.334V4c0 .736-.597 1.333-1.333 1.333H6A1.333 1.333 0 0 1 4.666 4V2.667c0-.737.597-1.334 1.334-1.334Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-vertical-justify-end_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
