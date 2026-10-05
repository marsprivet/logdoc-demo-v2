import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('AlignCenterHorizontal', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#align-center-horizontal_svg__a)",
		children: jsx("path", {
			d: "M1.333 8h13.333m-8 2.667v2.666a1.333 1.333 0 0 1-1.333 1.334H4a1.333 1.333 0 0 1-1.334-1.334v-2.666m4-5.334V2.667a1.333 1.333 0 0 0-1.333-1.334H4a1.333 1.333 0 0 0-1.334 1.334v2.666m10.667 5.334v.666A1.334 1.334 0 0 1 12 12.667h-1.334a1.333 1.333 0 0 1-1.333-1.334v-.666m0-5.334v-.666c0-.734.6-1.334 1.333-1.334H12a1.333 1.333 0 0 1 1.333 1.334v.666",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "align-center-horizontal_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
