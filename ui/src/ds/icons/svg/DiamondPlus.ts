import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('DiamondPlus', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#diamond-plus_svg__a)",
		children: jsx("path", {
			d: "M8 5.333v5.334M5.334 8h5.333M1.8 6.867a1.607 1.607 0 0 0 0 2.273l5.06 5.06a1.605 1.605 0 0 0 2.274 0l5.06-5.06a1.606 1.606 0 0 0 0-2.273l-5.06-5.06a1.607 1.607 0 0 0-2.274 0L1.8 6.867Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "diamond-plus_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
