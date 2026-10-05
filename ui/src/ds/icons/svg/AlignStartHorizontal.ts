import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AlignStartHorizontal', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-start-horizontal_svg__a)",
		children: jsx("path", {
			d: "M14.666 1.333H1.333M4 4h1.333c.736 0 1.333.597 1.333 1.333v8c0 .737-.597 1.334-1.333 1.334H4a1.333 1.333 0 0 1-1.334-1.334v-8C2.666 4.597 3.263 4 4 4Zm6.666 0H12c.736 0 1.333.597 1.333 1.333v3.334C13.333 9.403 12.736 10 12 10h-1.334a1.333 1.333 0 0 1-1.333-1.333V5.333C9.333 4.597 9.93 4 10.666 4Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-start-horizontal_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
