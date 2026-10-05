import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CloudOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cloud-off_svg__a)",
		children: jsx("path", {
			d: "m1.333 1.333 13.333 13.334M3.854 3.855A4.667 4.667 0 0 0 6 12.667h5.666c.296 0 .59-.043.872-.129M14.354 11a3.001 3.001 0 0 0-2.688-4.333h-1.193A4.672 4.672 0 0 0 6.666 3.38",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cloud-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
