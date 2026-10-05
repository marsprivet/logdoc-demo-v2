import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Tangent', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#tangent_svg__a)",
		children: jsx("path", {
			d: "m10.393 3.607-6.787 6.786M8 14.667S5.333 8.667 7 7c1.666-1.667 7.666 1 7.666 1m-2-5.333a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0ZM4 11.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "tangent_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
