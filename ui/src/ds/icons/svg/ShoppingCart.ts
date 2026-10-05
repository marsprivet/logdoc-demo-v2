import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ShoppingCart', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#shopping-cart_svg__a)",
		children: jsx("path", {
			d: "M1.366 1.367H2.7l1.773 8.28A1.333 1.333 0 0 0 5.806 10.7h6.52a1.333 1.333 0 0 0 1.3-1.047l1.1-4.953H3.413M6 14a.667.667 0 1 1-1.334 0A.667.667 0 0 1 6 14Zm7.333 0a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "shopping-cart_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
