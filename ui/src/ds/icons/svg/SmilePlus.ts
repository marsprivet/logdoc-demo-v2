import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SmilePlus', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#smile-plus_svg__a)",
		children: jsx("path", {
			d: "M14.666 7.333V8a6.667 6.667 0 1 1-6-6.667m-3.333 8s1 1.334 2.667 1.334c1.666 0 2.666-1.334 2.666-1.334M6 6h.006M10 6h.006m.66-2.667h4m-2-2v4",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "smile-plus_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
