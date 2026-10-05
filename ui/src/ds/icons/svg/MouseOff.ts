import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MouseOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#mouse-off_svg__a)",
		children: jsx("path", {
			d: "M8 4v.229m4.145 7.916A4.667 4.667 0 0 1 3.333 10V6c0-.747.178-1.482.521-2.145m8.812 5.04V6a4.667 4.667 0 0 0-6.96-4.065m8.96 12.732L1.333 1.333",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "mouse-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
