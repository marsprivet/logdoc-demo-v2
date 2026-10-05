import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidShieldClose', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("path", {
		d: "M8 14.667S13.334 12 13.334 8V3.333L8 1.333l-5.333 2V8C2.667 12 8 14.667 8 14.667Z",
		fill: "#fff",
		stroke: "#fff",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), jsx("path", {
		d: "m6.333 6 3.333 3.333M9.666 6 6.333 9.333",
		stroke: "#121317",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}),
);
