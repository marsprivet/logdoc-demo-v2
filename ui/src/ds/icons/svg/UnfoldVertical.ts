import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('UnfoldVertical', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#unfold-vertical_svg__a)",
		children: jsx("path", {
			d: "M8 14.667v-4m0 4 2-2m-2 2-2-2m2-7.334v-4m0 0 2 2m-2-2-2 2M2.666 8H1.333m5.333 0H5.333m5.333 0H9.333m5.333 0h-1.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "unfold-vertical_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
