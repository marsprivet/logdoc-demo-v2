import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Cookie', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#cookie_svg__a)",
		children: jsx("path", {
			d: "M5.666 5.667v.006m5 4.66v.007M8 8v.007m-.667 3.326v.007M4.666 9.333v.007M8 1.333A6.667 6.667 0 1 0 14.666 8a2.666 2.666 0 0 1-3.333-3.333A2.667 2.667 0 0 1 8 1.333Z",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "cookie_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
