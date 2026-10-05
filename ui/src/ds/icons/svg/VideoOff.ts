import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('VideoOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#video-off_svg__a)",
		children: jsx("path", {
			d: "M7.106 4h2.227a1.333 1.333 0 0 1 1.333 1.333V7l3.499-2.041a.333.333 0 0 1 .501.288v5.464m-4-.044A1.333 1.333 0 0 1 9.333 12H2.666a1.334 1.334 0 0 1-1.333-1.333V5.333A1.333 1.333 0 0 1 2.666 4H4M1.333 1.333l13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "video-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
