import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('EyeOpen', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M1.333 9.333s2-4.666 6.667-4.666c4.666 0 6.666 4.666 6.666 4.666",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "M8 11.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
		stroke: "inherit",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
