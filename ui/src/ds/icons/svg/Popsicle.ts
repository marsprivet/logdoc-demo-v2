import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Popsicle', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#popsicle_svg__a)",
		children: jsx("path", {
			d: "M14.666 14.667 11 11m1.4-1.4a1.289 1.289 0 0 0 0-1.867L7 2.333a3.347 3.347 0 1 0-4.734 4.734l5.4 5.4c.6.466 1.4.466 1.934-.067l2.8-2.8Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "popsicle_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
