import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('BellOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#bell-off_svg__a)",
		children: jsx("path", {
			d: "M5.8 2A4 4 0 0 1 12 5.333c0 1.123.135 2.242.4 3.334m-1.067 2.666H2s2-1.333 2-6A3.114 3.114 0 0 1 4.2 4.2M6.866 14a1.293 1.293 0 0 0 2.267 0m-7.8-12.667 13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "bell-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
