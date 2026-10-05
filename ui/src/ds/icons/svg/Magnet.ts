import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Magnet', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#magnet_svg__a)",
		children: jsx("path", {
			d: "M3.333 5.333 6 8m2 2 2.666 2.667M4 10 1.333 7.333l4.5-4.513a5.193 5.193 0 0 1 7.333 7.333l-4.5 4.514L6 12l4.26-4.24a1.427 1.427 0 0 0-2-2L4 10Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "magnet_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
