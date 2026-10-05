import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TouchpadOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#touchpad-off_svg__a)",
		children: jsx("path", {
			d: "M2.666 2.667A1.333 1.333 0 0 0 1.333 4v8a1.333 1.333 0 0 0 1.333 1.333h10.667m-12-4h8m5.333 0h-1.333m-5.333 4v-4m-6.667-8 13.333 13.334m0-4V4a1.333 1.333 0 0 0-1.333-1.333H6.666",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "touchpad-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
