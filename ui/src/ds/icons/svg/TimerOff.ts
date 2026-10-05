import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('TimerOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#timer-off_svg__a)",
		children: jsx("path", {
			d: "M6.666 1.333h2.667m-6.267 6a5.333 5.333 0 0 0 1.134 5.8 5.334 5.334 0 0 0 5.8 1.134M4.933 4.933A5.333 5.333 0 0 1 11.8 5.6a5.333 5.333 0 0 1 .6 6.8M1.333 1.333l13.333 13.334M8 8V6.667",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "timer-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
