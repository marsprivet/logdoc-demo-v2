import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Apple', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#apple_svg__a)",
		children: jsx("path", {
			d: "M8 4.667c.666-.374 1.853-1.334 3.333-1.334a3.273 3.273 0 0 1 3.333 3.187c0 2.813-2 8.147-4 8.147-.833 0-1.666-.707-2.666-.707s-1.834.707-2.667.707c-2 0-4-5.334-4-8.147a3.267 3.267 0 0 1 3.333-3.187c1.48 0 2.667.96 3.334 1.334Zm0 0c0-2-.667-3-1.334-3.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "apple_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
