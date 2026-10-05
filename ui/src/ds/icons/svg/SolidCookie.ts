import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('SolidCookie', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsxs("g", {
		clipPath: "url(#solid-cookie_svg__a)",
		children: [
			jsx("path", {
				d: "M8 1.333A6.667 6.667 0 1 0 14.666 8a2.666 2.666 0 0 1-3.333-3.333A2.667 2.667 0 0 1 8 1.333Z",
				fill: "#fff"
			}),
			jsx("path", {
				d: "M8 1.333A6.667 6.667 0 1 0 14.666 8a2.666 2.666 0 0 1-3.333-3.333A2.667 2.667 0 0 1 8 1.333",
				stroke: "#fff",
				strokeWidth: 1.333,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			jsx("path", {
				d: "M5.667 5.667v.006M10.667 10.333v.007M8 8v.007M7.333 11.333v.007M4.667 9.333v.007",
				stroke: "#121317",
				strokeWidth: 1.333,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	}), jsx("defs", { children: jsx("clipPath", {
		id: "solid-cookie_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
