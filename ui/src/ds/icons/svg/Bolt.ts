import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Bolt', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M14 10.667V5.333a1.333 1.333 0 0 0-.667-1.153L8.667 1.513a1.333 1.333 0 0 0-1.334 0L2.667 4.18A1.333 1.333 0 0 0 2 5.333v5.334a1.334 1.334 0 0 0 .667 1.153l4.666 2.667a1.334 1.334 0 0 0 1.334 0l4.666-2.667A1.333 1.333 0 0 0 14 10.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
