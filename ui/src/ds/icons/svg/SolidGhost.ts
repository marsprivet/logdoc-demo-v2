import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidGhost', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M8 1.333a5.333 5.333 0 0 0-5.333 5.334v8l2-2 1.667 1.666L8 12.667l1.667 1.666 1.667-1.666 2 2v-8A5.333 5.333 0 0 0 8 1.333Z",
		fill: "#fff",
		stroke: "#fff",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M6 6.667h.007M10 6.667h.007",
		stroke: "#121317",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
