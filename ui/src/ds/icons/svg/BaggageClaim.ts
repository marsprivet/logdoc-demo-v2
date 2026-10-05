import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BaggageClaim', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#baggage-claim_svg__a)",
		children: jsx("path", {
			d: "M14.666 12H4a1.333 1.333 0 0 1-1.334-1.333v-6a1.333 1.333 0 0 0-1.333-1.334m10 6V2.667A1.334 1.334 0 0 0 10 1.333h-.667A1.333 1.333 0 0 0 8 2.667v6.666M6 4h7.333c.368 0 .667.299.667.667v4a.667.667 0 0 1-.667.666H6a.667.667 0 0 1-.667-.666v-4C5.333 4.299 5.631 4 6 4Zm7.333 9.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Zm-6 0a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "baggage-claim_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
