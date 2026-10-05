import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Globe', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#globe_svg__a)",
		children: jsx("path", {
			d: "M14.666 8A6.667 6.667 0 0 1 8 14.667M14.666 8A6.667 6.667 0 0 0 8 1.333M14.666 8H1.333M8 14.667A6.667 6.667 0 0 1 1.333 8M8 14.667A9.666 9.666 0 0 1 8 1.333m0 13.334A9.666 9.666 0 0 0 8 1.333M1.333 8A6.667 6.667 0 0 1 8 1.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "globe_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
