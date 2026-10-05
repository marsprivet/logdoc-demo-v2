import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('SolidClock7', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#solid-clock-7_svg__a)",
		strokeWidth: 1.333,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [jsx("path", {
			d: "M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z",
			fill: "#fff",
			stroke: "#fff"
		}), jsx("path", {
			d: "M8 4v4l-1.667 2.667",
			stroke: "#121317"
		})]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "solid-clock-7_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
