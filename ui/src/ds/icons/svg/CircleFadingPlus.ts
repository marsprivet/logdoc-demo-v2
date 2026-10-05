import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('CircleFadingPlus', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#circle-fading-plus_svg__a)",
		children: jsx("path", {
			d: "M8 1.333A6.667 6.667 0 0 1 12.92 12.5M8 5.333v5.334M10.666 8H5.333M1.666 5.917a6.667 6.667 0 0 0-.333 2m.553 2.75a6.666 6.666 0 0 0 1.62 2.266M3.09 3.49c.186-.203.385-.393.594-.571M5.762 14.28a6.667 6.667 0 0 0 5.088-.253",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "circle-fading-plus_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
