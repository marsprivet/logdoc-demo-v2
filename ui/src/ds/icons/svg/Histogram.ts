import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Histogram', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M8.667 2H7.333C6.597 2 6 2.672 6 3.5V14h4V3.5C10 2.672 9.403 2 8.667 2Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M10.333 7.333h2.334c.736 0 1.333.664 1.333 1.482v3.704c0 .818-.597 1.481-1.333 1.481H8M5.667 5.333H3.333C2.597 5.333 2 6.196 2 7.26v4.815C2 13.138 2.597 14 3.333 14H8",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
