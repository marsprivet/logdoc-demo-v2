import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SignpostBig', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#signpost-big_svg__a)",
		children: jsx("path", {
			d: "M6.666 6h-4L1.333 4.667l1.333-1.334h4m2.667 0h4l1.333 1.334L13.333 6h-4m-2.667 8.667v-12a1.333 1.333 0 0 1 2.667 0v12m-4 0h5.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "signpost-big_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
