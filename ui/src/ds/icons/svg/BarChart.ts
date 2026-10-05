import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BarChart', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bar-chart_svg__a)",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: jsx("path", { d: "M5.334 1.333H4c-.736 0-1.333.597-1.333 1.334v8C2.667 11.403 3.264 12 4 12h1.334c.736 0 1.333-.597 1.333-1.333v-8c0-.737-.597-1.334-1.333-1.334ZM12 6h-1.334c-.736 0-1.333.597-1.333 1.333v3.334c0 .736.597 1.333 1.333 1.333H12c.736 0 1.333-.597 1.333-1.333V7.333C13.333 6.597 12.736 6 12 6ZM14.666 14.667H1.333" })
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bar-chart_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
