import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('UmbrellaOff', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#umbrella-off_svg__a)",
		children: jsx("path", {
			d: "M8 1.333V2m2.333 12A1.233 1.233 0 0 1 8 13.333V8H1.333c.172-1.7.99-3.27 2.285-4.383M11.666 8h3a6.666 6.666 0 0 0-8.664-5.697m-4.669-.97 13.333 13.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "umbrella-off_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
