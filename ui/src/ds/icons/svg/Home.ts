import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Home', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#home_svg__a)",
		children: [
			jsx("path", {
				d: "m2 6 6-4.667L14 6M2 6l.666 7.333A1.333 1.333 0 0 0 4 14.666h8a1.333 1.333 0 0 0 1.333-1.333L14 6M2 6l-.934.667M14 6l.933.667",
				stroke: "inherit",
				strokeWidth: 1.333,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			jsx("path", {
				d: "M8 10a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 8 10Z",
				stroke: "inherit",
				strokeWidth: 1.333,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			jsx("path", {
				d: "M13 1.333a.667.667 0 0 0-1.334 0H13Zm-.667 3.334H13V1.333h-1.334v3.334h.667Z",
				fill: "#fff"
			})
		]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "home_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
