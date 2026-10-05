import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AddToView', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M3.667 6.667 2.667 4h10.667l-1.2 4.18h.006a.666.666 0 0 1-.64.487H8.334M10 10.333V8.667M6 4v2.667M10 4v4.667M8 4V1.333M8.666 1.333H7.333M10 12.667 11.333 14 10 15.333",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M6 9v3.667A1.333 1.333 0 0 0 7.333 14h4",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
