import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CaptionsOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#captions-off_svg__a)",
		children: jsx("path", {
			d: "M7 3.333h5.666A1.333 1.333 0 0 1 14 4.667v5.666m-2.667-3H11m1.666 5.334H3.333A1.334 1.334 0 0 1 2 11.333V4.667a1.333 1.333 0 0 1 1.333-1.334m-2-2 13.333 13.334m-10-7.334h2.667M4.666 10h1.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "captions-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
